const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
};  

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


