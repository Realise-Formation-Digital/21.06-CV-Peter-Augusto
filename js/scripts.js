/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
3
//Begin of my code
function minhaFuncao() {
    document.getElementById("marcada1").checked=true; 
    document.getElementById("marcada2").checked=true; 
    document.getElementById("marcada3").checked=true; 
    document.getElementById("marcada4").checked=true; 
    document.getElementById("marcada5").checked=true; 
    document.getElementById("marcada6").checked=true; 
    document.getElementById("marcada7").checked=true; 
    document.getElementById("marcada8").checked=true; 
    document.getElementById("marcada9").checked=true; 
    document.getElementById("marcada10").checked=true; 
    document.getElementById("marcada11").checked=true; 
    document.getElementById("marcada12").checked=true; 
}
