const stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Holder : ['cup', 'cone', 'stick'],
    Liquid : ['water', 'ice'],
    Toppings : ['chocolate', 'sprinklers']
};

function ask_toppings() {
    setTimeout(() => {
        console.log('which topping would u like?')
    }, 3000);
}
async function kitchen() {
    console.log('a');
    console.log('b');
    await ask_toppings();
    console.log('c');
}
console.log('choosing flavor')
kitchen();