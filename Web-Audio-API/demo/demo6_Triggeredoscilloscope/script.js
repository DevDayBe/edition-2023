'use strict';

class VCO_PANEL {
    constructor(select, slider) {
        this.slider = slider;
        this.select = select;
    }
}



const button_on = document.getElementById("button_on");
const button_off = document.getElementById("button_off");

button_on.addEventListener("click", (e) => {
    button_off.disabled = false;
    button_on.disabled = true;
    audio_ctx.resume();
});

button_off.addEventListener("click", (e) => {
    button_on.disabled = false;
    button_off.disabled = true;
    audio_ctx.suspend();
});

function create_slider_panel(title) {
    const my_div = document.createElement("div");
    my_div.innerHTML = title;
    my_div.classList = "module";
    document.getElementById("my_audio_rack").appendChild(my_div);


    const my_slider = document.createElement("input");
    my_slider.setAttribute("type", "range");
    my_div.appendChild(my_slider);
    return my_slider
}

function create_vco_panel(title) {
    const my_div = document.createElement("div");
    my_div.innerHTML = title;
    my_div.classList = "module";
    my_div.style.backgroundColor = "rgb(100,200,100)";

    document.getElementById("my_audio_rack").appendChild(my_div);

    const select = document.createElement("select");
    select.add(new Option("sine"));
    select.add(new Option("square"));
    select.add(new Option("triangle"));
    select.add(new Option("sawtooth"));
    my_div.appendChild(select);

    const my_slider = document.createElement("input");
    my_slider.setAttribute("type", "range");
    my_div.appendChild(my_slider);
    return new VCO_PANEL(select, my_slider);
}

function create_filter_panel(title) {
    const my_div = document.createElement("div");
    my_div.innerHTML = title;
    my_div.classList = "module";
    my_div.style.backgroundColor = "rgb(200,64,100)";
    document.getElementById("my_audio_rack").appendChild(my_div);

    const freq_slider = document.createElement("input");
    freq_slider.setAttribute("type", "range");
    my_div.appendChild(freq_slider);

    const q_slider = document.createElement("input");
    q_slider.setAttribute("type", "range");
    my_div.appendChild(q_slider);
    return new FILTER_PANEL(freq_slider, q_slider);
}
// ============ MAIN PROGRAM ==========================

// create the audiocontext
const audio_ctx = new AudioContext(); // there are options but we use the default settings
audio_ctx.suspend(); // initially disable it (to avoid ugly noise after each save)

// create on output
const audio_output = audio_ctx.destination;

//create the LFO
const lfo = audio_ctx.createOscillator();
lfo.type = "sine";
lfo.frequency.setValueAtTime(10, audio_ctx.currentTime);
//create GUI panel for LFO
const lfo_panel = create_vco_panel("LFO")
lfo_panel.slider.addEventListener("input", (event) => {
    lfo.frequency.setValueAtTime(lfo_panel.slider.value / 5, audio_ctx.currentTime)
});
lfo_panel.select.addEventListener("change", () => {
    lfo.type = lfo_panel.select.options[lfo_panel.select.selectedIndex].text;
});

//create the LFO amplifier
const vca_for_lfo = audio_ctx.createGain();
//create GUI panel for LFO VCA 
create_slider_panel("LFO VCA").addEventListener("input", (event) => {
    vca_for_lfo.gain.setValueAtTime(event.target.value * 5, audio_ctx.currentTime);
});


// create the tone generator
const osc1 = audio_ctx.createOscillator();
osc1.type = 'sine'; // values: sine, square,sawtooth,triangle,custom
//create GUI panel for VCO
const vco_panel = create_vco_panel("VCO")
vco_panel.slider.addEventListener("input", (event) => {
    osc1.frequency.setValueAtTime(event.target.value * 10 + 100, audio_ctx.currentTime);
});
vco_panel.select.addEventListener("change", () => {
    osc1.type = vco_panel.select.options[vco_panel.select.selectedIndex].text;
});

//create an output VCA
const vca = audio_ctx.createGain();
//create GUI panel for VCA
create_slider_panel("VCA").addEventListener("input", (event) => {
    vca.gain.setValueAtTime(event.target.value / 100, audio_ctx.currentTime);
});

//create an analyser for oscilloscope
const analyser = audio_ctx.createAnalyser();

const canvas = document.getElementById("canvas_oscilloscope");
canvas.width = 300;
canvas.height = 130
    ;
const canvasCtx = canvas.getContext("2d");
const bufferLength = 512;
analyser.fftSize = bufferLength;

//=================================
//create a output VCA
const output_vca = audio_ctx.createGain();
//create GUI panel for VCA
create_slider_panel("output VCA").addEventListener("input", (event) => {
    output_vca.gain.setValueAtTime(event.target.value / 100, audio_ctx.currentTime);
});

//====================== Connect the nodes ===================================
lfo.connect(vca_for_lfo);
vca_for_lfo.connect(osc1.frequency);
osc1.connect(vca);
vca.connect(analyser);
analyser.connect(output_vca);
output_vca.connect(audio_output);
osc1.start();
lfo.start();

//display sound shape 
function draw() {
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(0, 255, 0)";

    const sliceWidth = ((canvas.width * 1.0) / bufferLength) * 2;
    let x = 0;

    canvasCtx.beginPath();
    let startindex = 0;
    const trig_level = document.getElementById("slider_trigger_level").value;
    while (
        startindex < bufferLength - 2 &&
        !(
            dataArray[startindex] > trig_level &&
            dataArray[startindex + 2] < trig_level
        )
    ) {
        startindex++;
    }
    if (startindex === bufferLength - 2) {
        //not triggered
        startindex = 0;
    }
    for (let i = 0; i < bufferLength / 2; i++) {
        const y = canvas.height - (((dataArray[i + startindex] / 128.0) * canvas.height) / 2);

        if (i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
        }
        x += sliceWidth;
    }

    canvasCtx.stroke();
    requestAnimationFrame(draw);
}


draw();


