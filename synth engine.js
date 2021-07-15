
function setup() {
    osc = new p5.Oscillator();
    analyzer = new p5.FFT();

    let cnvWidth = document.querySelector('.box1').offsetWidth;
    let cnvHeight = document.querySelector('.box1').offsetHeight;
    cnv = createCanvas(cnvWidth, cnvHeight);
    cnv.position(0,0, 'fixed');
    noFill();
}


function draw() {
    background('white');

    waveform = analyzer.waveform();

    stroke('black');
    strokeWeight(5);
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, height, 0);
        vertex(x, y);
    }
    endShape();
}








var control = {
    ctrType : function () {
        let waveForm = document.querySelector('.waveForm').value;
        osc.setType(waveForm);
    }
}

function touchPad() {
    var selectP = document.querySelector('#a');
    selectP.addEventListener('touchstart', changeColor);

    function changeColor() {
        selectP.classList.add('pressed');
        osc.start();
    }

    selectP.addEventListener('touchend', changeColor2);

    function changeColor2() {
        selectP.classList.remove('pressed');
        osc.stop();
    }
}
touchPad();








