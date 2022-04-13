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


