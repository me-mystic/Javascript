/*
    XMLHttpRequest material from mdn ::
    https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

    Http status code ::
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    Value	 State	                        Description
    ----------------------------------------------------------------------------------
      0	     UNSENT	                Client has been created. open() not called yet.
      1	     OPENED	                open() has been called.
      2	     HEADERS_RECEIVED	    send() has been called, and headers and status are available.
      3	     LOADING	            Downloading; responseText holds partial data.
      4	     DONE	                The operation is complete.

    testing ::
    fake json data
*/ 

let fetchBtn = document.getElementById('fetchBtn');
let popBtn = document.getElementById('popBtn');
let container = document.querySelector('.container')

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("u have clicked fetch btn");

    //instantiate an xhr obj
    const xhr = new XMLHttpRequest();

    // open xhr obj -- get req
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('Content-type', 'application/json');

    // what to do on progress
    xhr.onprogress = function() {
        console.log("on progress");
    }

    // xhr.onreadystatechange = function() {
    //     console.log(this.readyState);
    // }
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);
        } else {
            console.error(`${this.statusText}`)
        }
    }
    obj = `	{"nafhme":"tejkhst","salary":"13423","age":"23"}`
    xhr.send(obj);
    console.log("we r done");
}
let obj = {}
// populate
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log("u have clicked populate btn");

    //instantiate an xhr obj
    const xhr = new XMLHttpRequest();

    // open xhr obj -- get req
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onload = function() {
        if(this.status === 200) {
            obj = JSON.parse(this.responseText);
            console.log(obj)
            let list = document.getElementById('list');
            str =''
            // console.log(obj)
            for (key in obj.data) {
                str += `<li>${obj.data[key].employee_name}</li>`
            }
            console.log(str);
            list.innerHTML = str;
        } else {
            console.error(`${this.statusText}`)
        }
    }
    xhr.send();
    console.log("we r done");
}