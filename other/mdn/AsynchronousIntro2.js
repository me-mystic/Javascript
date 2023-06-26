let log = document.querySelector('.event-log');
let reload = document.querySelector('#reload');

document.querySelector('#xhr').addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('loadend', () => {
        log.textContent = `${log.textContent}Finished with status ${xhr.status}`;
    });

    xhr.open('GET', "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");
    xhr.send();
    log.textContent = `${log.textContent}Started xhr request\n`;
})

reload.addEventListener('click', () => {
    log.textContent = "";
})