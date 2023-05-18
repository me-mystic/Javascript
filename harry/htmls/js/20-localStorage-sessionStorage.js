/* local Storage -->obj allows u to save key/value pairs in the browser.Stores data with no expiration dat--available for future sessions*/

/*session storage -->data gets cleared after session ends
when u open a new tab..a new session is assigned to it.*/ 

// adding a key value pair to the local storage
localStorage.setItem('name', 'shruti');

/*window.localStorage
Storage {name: 'shruti', length: 1}
locals
localStorage
Storage {name: 'shruti', length: 1}
typeof localStorage
'object'
typeof localStorage.name
'string'
localStorage.name
'shruti'*/

// u shouldn't write objects directly as values::

const arr = new Array(6,4,0);
localStorage.setItem('array', arr );

/*localStorage
Storage {name: 'shruti', array: '6,4,0', length: 2}
localStorage.array
'6,4,0'
typeof localStorage.array
'string'*/ 

localStorage.setItem('legalarr', JSON.stringify(arr));

/*localStorage.array
'[6,4,0]'
typeof localStorage.legalarr
'string'
typeof JSON.parse(localStorage.array)
'object'
JSON.parse(localStorage.legalarr)
(3) [6, 4, 0]0: 6  1: 4  2: 0length: 3[[Prototype]]: Array(0)
*/

localStorage.setItem('array', JSON.stringify(arr) ); // modifies the existing key value

// getting a value from key
console.log(localStorage.array);
console.log(localStorage.getItem('name'));
/*[6,4,0]
shruti*/

// clearing a particular key value pair

// localStorage.removeItem('array');
/*localStorage
Storage {name: 'shruti', legalarr: '[6,4,0]', length: 2}*/

// clearing all

// localStorage.clear();
/*localStorage
Storage {length: 0}*/

sessionStorage.setItem('ssname', 'shruti');
sessionStorage.setItem('ssarray', arr );
sessionStorage.setItem('sslegalarr', JSON.stringify(arr));
