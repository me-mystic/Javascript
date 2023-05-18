let btn = document.querySelector('button');
btn.addEventListener('click', print);
function print() {
    let str = document.getElementById('ans').value;
    let links = document.links;
    let links_arr = Array.from(links);
    let show = document.createElement('p');
    show.innerHTML = "Results:";
    document.body.appendChild(show);
    links_arr.forEach(function(e) {
        if(e.href.includes(str)) {
            let p = document.createElement('a');
            p.href = e.href;
            p.innerHTML = e.innerHTML;
            let li = document.createElement('li');
            li.appendChild(p);
            document.body.appendChild(li);
        };
    })
}
// let links = document.links;
// let links_arr = Array.from(links);
// links_arr.forEach(function(e, i) {
//     if(e.href.includes(str)) {
//         let p = document.createElement('a');
//         p.href = e.href;
//         p.innerHTML = e.innerHTML;
//         let li = document.createElement('li');
//         li.appendChild(p);
//         document.body.appendChild(li);
//     };
// })
// console.log(fin_links);
// fin_links.forEach(function(e) {
//     console.log(links[e].href)
// })