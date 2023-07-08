console.log("me gonna promise something");

/*
Promise :
 - resolve
 - reject
 - pending
*/ 

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if(!error) {
                console.log("your promise has been resolved");
                resolve();
            } else {
                console.log("Sorry we couldn't resolve ur promise");
                reject("saitee");
            }
        }, 3000);
    })
}

func1().then(function() {
    console.log("Shru: thnx XD");
}).catch(function(error) {
    console.log("Shru: Betrayor", error);
});