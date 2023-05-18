const add = function(a,b) {
    return a + b;
}

const sum = (a,b) => console.log(a+b);

let obj = {
    name:'shruti',
    game:function() {
        return 'genshin';
    },
    power: () => 'nightvision'
}
console.log(obj.game());
console.log(obj.power());

