'use strict';

class VCO_PANEL {
    constructor(select, slider) {
        this.slider = slider;
        this.select = select;
    }
}

class FILTER_PANEL {
    constructor(frequency, q) {
        this.frequency = frequency;
        this.q = q;
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
lfo.frequency.value = 10;
lfo.start();

//create GUI panel for LFO
const lfo_panel = create_vco_panel("LFO");
lfo_panel.slider.addEventListener("input", (event) => {
    lfo.frequency.setValueAtTime(lfo_panel.slider.value / 5, audio_ctx.currentTime)
});
lfo_panel.select.addEventListener("change", () => {
    lfo.type = lfo_panel.select.options[lfo_panel.select.selectedIndex].text;
});


//create the LFO amplifier
const vca_for_lfo = audio_ctx.createGain();
vca_for_lfo.gain.value = 250;

//create GUI panel for LFO VCA 
create_slider_panel("LFO VCA").addEventListener("input", (event) => {
    vca_for_lfo.gain.setValueAtTime(event.target.value * 5, audio_ctx.currentTime);
});


// create the tone generator
const osc1 = audio_ctx.createOscillator();
osc1.type = 'sine';
osc1.start();

//create GUI panel for VCO
const vco_panel = create_vco_panel("VCO")
vco_panel.slider.addEventListener("input", (event) => {
    osc1.frequency.setValueAtTime(event.target.value * 10 + 100, audio_ctx.currentTime);
});
vco_panel.select.addEventListener("change", () => {
    osc1.type = vco_panel.select.options[vco_panel.select.selectedIndex].text;
});

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
osc1.connect(output_vca);
output_vca.connect(audio_output);


