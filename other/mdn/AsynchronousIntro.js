function isPrime(n) {
    for(let i = 2 ; i <= Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return n > 1
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
    let primes = []
    while(primes.length <= quota) {
        const candidate = random(1000000);
        if(isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

const quota = document.querySelector('#quota');
const generate = document.querySelector('#generate');
const reload = document.querySelector('#reload');

generate.addEventListener('click', () => {
    const primes = generatePrimes(quota.value);
    let str = ``
    primes.forEach(element => {
        str += `<p>${element}</p>`
    });
    const op = document.querySelector('.op');
    op.innerHTML = str;
})

reload.addEventListener('click', () => document.location.reload());