let num = document.getElementById('no');
let plus = document.getElementById('add');
let minus = document.getElementById('sub');

const obj = {counter:2};

window.onload = function() {
    num.innerText = obj.counter;
}

Object.defineProperty(obj, "add", {
    get :  function(){this.counter++}
})
Object.defineProperty(obj, "sub", {
    get :  function(){this.counter--}
})

plus.addEventListener('click', () => {
    obj.add;
    num.innerHTML = obj.counter;
})

minus.addEventListener('click', () => {
    obj.sub;
    num.innerHTML = obj.counter;
})