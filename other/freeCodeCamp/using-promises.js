const stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Holder : ['cup', 'cone', 'stick'],
    Liquid : ['water', 'ice'],
    Toppings : ['chocolate', 'sprinklers']
};

let is_shop_open = true;
let e1 = true;
let e2 = false;
const order = (e, time, work) => {
    return new Promise( (resolve, reject) => {
        if(is_shop_open) {
            setTimeout(() => {
                resolve( work() );
            }, time);
        } else {
            reject(console.log('shop is closed.'))
        }
    })
}

order(e1, 2000, () => {
    console.log(`${stocks.Fruits[0]} ice-cream ordered`);
})

.then (() => {
    return order(e1, 2000, () => console.log('fruit has been cut.'));
})

.then ( () => order(e2, 1000, () => {
    console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added.`)
}))

.then ( () => order(e1, 1000, () => console.log('machine started')))

.then ( () => {
    return order(e1, 2000, () => console.log(`ice-cream is placed on ${stocks.Holder[1]}`))
})

.then ( () => {
    return order(e1, 3000, () => console.log(`${stocks.Toppings[1]} added as topping`));
})

.then ( () => {
    return order(e1, 2000, () => console.log(`${stocks.Fruits[0]} ice-cream is served.`));
})

.catch ( () => console.log('please come in working hours'))
.finally ( () => console.log('the day has ended. please come tommorow.'));