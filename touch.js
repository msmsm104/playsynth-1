
var selectP = document.querySelector('#a');
selectP.addEventListener('touchstart', changeColor);

function changeColor() {
    selectP.classList.add('pressed');
    osc.start();
}

selectP.addEventListener('touchend', changeColor2);

function changeColor2() {
    selectP.classList.remove('pressed');
}
