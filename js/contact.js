function changePage(event) {
    let pageReference = event.target.id;
    let divLoader = document.getElementById('loader');

    switch(pageReference) {
        case 'indexPage':
            // divLoader.removeAttribute('class', 'display-loading-div');
            window.location.href = 'http://127.0.0.1:5500/index.html';
            break;
            
        case 'aboutPage':
            try {
                window.location.href = 'http://127.0.0.1:5500/pages/about.html';
            } catch (e) {
                window.location.href = 'http://localhost:8080/pages/about.html';
            }
            break;

        case 'contactPage':
            try {
                window.location.href = 'http://127.0.0.1:5500/pages/contact.html';
            } catch (e) {
                window.location.href = 'http://localhost:8080/pages/contact.html';
            }
            break;
    }
}

function submitASK(event) {
    let divLoader = document.getElementById('loader');
    divLoader.removeAttribute('class', 'display-loading-div');

    const promiseTimer = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                alert('Recebemos seu feedback! Obrigado pelo seu apoio!')
            );
          }, 500);
    }) 
    promiseTimer
    .then(() => {
    })

}