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

const sequencer_panel = create_vco_panel("Sequencer");


//=================================
//create a output VCA
const output_vca = audio_ctx.createGain();
output_vca.gain.value = 0.5;
//create GUI panel for VCA
create_slider_panel("output VCA").addEventListener("input", (event) => {
    output_vca.gain.setValueAtTime(event.target.value / 100, audio_ctx.currentTime);
});


// demo 2 create a sequencer
//==========================

const noteFrequency = {
    "C4": 261.63,
    "C4#": 277.18,
    "D4": 293.66,
    "D4#": 311.13,
    "E4": 329.63,
    "F4": 349.23,
    "F4#": 369.99,
    "G4": 392,
    "G4#": 415.30,
    "A4": 440,
    "A4#": 466.16,
    "B4": 493.88,
    "C5": 523.25,
    "C5#": 554.37,
    "D5": 587.33,
    "D5#": 622.25,
    "E5": 659.25,
    "F5": 698.46,
    "F5#": 739.99,
    "G5": 783.99,
    "G5#": 830.61,
    "A5": 880,
    "A5#": 932.33,
    "B5": 987.77,
};

const scale = ["C5", "D5", "E5", "F5", "G5", "A5", "B5"];

nextNote(0);

function nextNote() {
    const osc = new OscillatorNode(audio_ctx, {
        frequency: noteFrequency[scale[Math.floor(Math.random() * scale.length)]],
        type: sequencer_panel.select.value
    });
    const duration = (0.01 + (100 - sequencer_panel.slider.value) / 90);

    osc.connect(output_vca);
    osc.addEventListener("ended", () => {
        nextNote();
    }, { once: true });

    const now = audio_ctx.currentTime;
    osc.start(now);
    osc.stop(now + duration);
}

//====================== Connect the nodes ===================================
output_vca.connect(audio_output);



