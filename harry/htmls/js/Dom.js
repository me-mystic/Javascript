let a = document.images;
let imgs_arr = Array.from(a);
let b = document.scripts;
let space = document.querySelector('.add');
let u_l = document.createElement('ul');
let p1 = document.createElement('p');
p1.innerText = 'Images used for this doc::'
space.appendChild(p1);
imgs_arr.forEach(function(e) {
    let list = document.createElement('li');
    list.innerHTML = `${e.alt}`;
    u_l.appendChild(list);
})
space.appendChild(u_l);

let p2 = document.createElement('p');
p2.innerText = 'Script used for this doc::'
space.appendChild(p2);

let sc = document.scripts;
let list2 = document.createElement('li');
let sc_array = Array.from(sc);
list2.innerHTML = `${sc_array[1].src}`
space.appendChild(list2);