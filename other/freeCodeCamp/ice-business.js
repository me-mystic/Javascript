const stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Holder : ['cup', 'cone', 'stick'],
    Liquid : ['water', 'ice'],
    Toppings : ['chocolate', 'sprinklers']
};
let fruit_name = 0;
const order = (fruit_name,call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} ice-cream ordered`);
        call_production();
    }, 2000);
    // setTimeout(call_production, 2000);
}

const production = () => {
    setTimeout(() => {
        console.log('production started');
        setTimeout(() => {
            console.log('fruit chopped');
            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`);
                setTimeout(() => {
                    console.log(`${stocks.Holder[0]} selected`);
                    setTimeout(() => {
                        console.log(`${stocks.Toppings[0]} added as a topping`);
                        setTimeout(() => {
                            console.log('Ice-cream served!');
                            console.log(`U can now enjoy your ${stocks.Fruits[fruit_name]} ice-cream!`)
                        }, 2000);
                    }, 3000)
                }, 2000);
            }, 1000);
        }, 2000);
    }, 0000);
}
order(fruit_name, production);