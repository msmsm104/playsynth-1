
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

let R = Math.pow(2, 1/12);

var frequency = {
    setFrequency : function(numb) {
        return Math.pow(R, numb)*440;
    }
};

let arr = ['a','w','s','e','d', 'f','t','g','y','h','u','j'];

var j = 3;

function keyPressed() {

    if(key === 'z') {
        j = j - 12;
    } else if (key === 'x') {
        j = j + 12;
    } else if(key != 'q') {

    var i = 0;
    
    while(i < arr.length) {
        if(key === arr[i]) {
            osc.start(0, frequency.setFrequency(i+j));
        };
        i = i + 1;
    };
    }
    
    control.ctrType();
}

function keyReleased() {
    osc.stop();
}


var control = {
    ctrType : function () {
        let waveForm = document.querySelector('.waveForm').value;
        osc.setType(waveForm);
    }
}
