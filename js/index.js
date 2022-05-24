// document.addEventListener('scroll', function() {
//     let nav = document.getElementById('navigation');
//     // let divNavigator = document.getElementById('divNavigator');
//     if(window.scrollY >= 300) {
//         nav.setAttribute('class', 'fixed-header');
//         nav.classList.add('fixed-top');
//         // divNavigator.setAttribute('class', 'fixed-header');
//     } else {
//         nav.classList.remove('fixed-top');
//         // divNavigator.removeAttribute('class', 'fixed-header');
//     }
// });

// $(document).ready(function(){
//     $("#myCarousel").carousel({interval: 500});

//     $(".left").click(function(){
//         $("#myCarousel").carousel("prev");
//       });
//       $(".right").click(function(){
//         $("#myCarousel").carousel("next");
//       });
// })

// function colapseHandler() {
//     let navColapse = document.getElementById('conteudoNavbarSuportado');
    
//     if(navColapse.classList.contains('collapse')) {
//         navColapse.classList.remove('collapse')
//     } else {
//         navColapse.classList.add('collapse')
//     }
// }

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

// window.onload = setNavigationIcons;

// window.onresize = setNavigationIcons;

// function setNavigationIcons() {
//     const earth = document.getElementById('earth');
//     const burguer = document.getElementById('burguer');
//     const pagesList = [
//         {id: 'indexPage', name: 'Inicio'},
//         {id: 'arquivePage', name: 'Arquive'},
//         {id: 'donationPage', name: 'Doação'},
//         {id: 'aboutPage', name: 'Sobre Nós'}
//     ]

//     console.log(getDeviceType());

//     if(getDeviceType() == 'mobile' ) {
//         earth.setAttribute('class', 'display-hide');
//         burguer.removeAttribute('class', 'display-hide')
        
//         pagesList.filter((elmnt) => {
//             return elmnt.id != 'indexPage';
//         }).forEach((elmnt) => {
//             document.getElementById(elmnt.id).setAttribute('class', 'display-hide');
//             document.getElementById(elmnt.id).parentElement.setAttribute('class', 'display-hide');
//         })

//     } else if(getDeviceType() === 'desktop') {
//         earth.removeAttribute('class', 'display-hide');
//         burguer.setAttribute('class', 'display-hide');
//     }
// }



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
            divLoader.removeAttribute('class', 'display-loading-div');
            promiseTimer
            .then(() => {
                window.location.href = 'index.html';
            })
            break;
    }
}
