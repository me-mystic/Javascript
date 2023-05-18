// Date object
let newDate = new Date();
newDate = new Date('3 23 2002');
newDate = new Date('mar 23 2002');
newDate = new Date('3/23/2002');
let get = newDate.getDay();
get = newDate.getMonth();
get = newDate.getFullYear();
get = newDate.getDate();

get = newDate.getSeconds();
get = newDate.getMinutes();
get = newDate.getHours();
get = newDate.getMilliseconds();
get = newDate.getTime(); // --> timestamp..no of secs since the epoch
get = newDate.setDate(1);
get = newDate.setMonth(0);
get = newDate.setFullYear(1970);
get = newDate.setHours(5);
get = newDate.setMinutes(30);
get = newDate.getTime(); // --> timestamp..no of secs since the epoch
console.log(newDate);
console.log(get);