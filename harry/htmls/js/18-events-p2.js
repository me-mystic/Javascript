const btn = document.getElementById('btn');
btn.addEventListener('click', func1); // only accepts left click
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);
function func1(e) {
    e.preventDefault();
    console.log('single click')
}
function func2(e) {
    e.preventDefault();
    console.log('double click')
}
function func3(e) {
    e.preventDefault();
    console.log('mousedown click')
}

// mouse enter,  mouse leave,  mouse move
document.querySelector('.no').addEventListener('mouseenter', func4);
document.querySelector('.no').addEventListener('mouseleave', func5);
document.querySelector('.container').addEventListener('mousemove', func6);

function func4() {
    console.log('u enter the dummy div');
}
function func5() {
    console.log('u left the dummy div');
}
function func6(e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.background = `rgb(${183+ e.offsetX % 31}, ${111 + e.offsetY % 92}, ${ 50*e.offsetY })`;
}
