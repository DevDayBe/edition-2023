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
// ============ MAIN PROGRAM ==========================

const audio_ctx = new AudioContext();
const audio_output = audio_ctx.destination;
audio_ctx.suspend();

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

// create the tone generator
const osc1 = audio_ctx.createOscillator();
osc1.type = 'sine'; // values: sine, square,sawtooth,triangle,custom
osc1.frequency.value = 600;
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
output_vca.gain.value = 0.5;
//create GUI panel for VCA
create_slider_panel("output VCA").addEventListener("input", (event) => {
    output_vca.gain.setValueAtTime(event.target.value / 100, audio_ctx.currentTime);
});


//====================== Connect the nodes ===================================
osc1.connect(output_vca);
output_vca.connect(audio_output);





