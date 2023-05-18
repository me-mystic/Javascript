const head = document.getElementById('heading');
// event listener
head.addEventListener('mouseover', function(e) {
    // e --> event object
    console.log('u r not supposed toclick the heading..dumbo!!');
    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList; // --> returns a DOMTokenList --> can be converted to array using Array.from();
    variable = e.target.classList;
    variable = e.offsetX;//--> how far u ve clicked from the starting of element
    variable = e.offsetY;
    variable = e.clientX;// --> how far u have clicked wrt window
    variable = e.clientY;
    // location.href = 'https://www.youtube.com';
    console.log(variable);
})