// a prototype

const proto = {
    slogan: function() {
        console.log("we strive to stay the best")
    },
    changeName : function(name) {
        this.name = name;
    }
}

let harry = Object.create(proto);
harry.name = 'Shruu';
harry.roll = 279;
harry.slogan();
harry.changeName('ygde');
console.log(harry)

// also creates harry objj

let HarryObj = Object.create(proto, {
    name : {value : 'shru', writable : true},
    roll : {value : 279}
})
HarryObj.changeName('jbwe');
HarryObj.slogan()
console.log(HarryObj)   