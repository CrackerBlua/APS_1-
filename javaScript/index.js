document.addEventListener('scroll', function() {
    let nav = document.getElementById('navigation');
    let divNavigator = document.getElementById('divNavigator');
    if(window.scrollY >= 300) {
        nav.setAttribute('class', 'fixed-header');
        divNavigator.setAttribute('class', 'fixed-header');
    } else {
        nav.removeAttribute('class', 'fixed-header');
        divNavigator.removeAttribute('class', 'fixed-header');
    }
});

function changePage(event) {
    let pageReference = event.target.id;
    let divLoader = document.getElementById('loader');

    const promiseTimer = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
          }, 10000);
    }) 

    switch(pageReference) {
        case 'indexPage':
            console.log('indexPage');
            divLoader.removeAttribute('class', 'display-loading-div');
            promiseTimer
            .then(() => {
                window.location.href = 'index.html';
            })
            break;
    }
}

async function setTimer(mili) {
    setTimeout(() => {console.log('Passando aqui')}, mili)
}
// divLoader.setAttribute('class', 'display-loading-div');