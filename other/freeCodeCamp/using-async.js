const stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Holder : ['cup', 'cone', 'stick'],
    Liquid : ['water', 'ice'],
    Toppings : ['chocolate', 'sprinklers']
};

async function order(t, s) {
    try {
        setTimeout(() => console.log(s)
        , t)
        // await abc;
    }
    catch(e) {
        console.log('abc doesnt exist', e);
    }
    finally {
        console.log('runs anyways')
    }
}

order(2000, 'ordered')
.then(() => order(3000, 'production'))
.then(() => order(4000, 'production1'))
// .finally(() => console.log('again runs anyway'))