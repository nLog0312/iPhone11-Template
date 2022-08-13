// Scroll - fixed header
let _main = document.querySelector('.main')
let headerMain = document.querySelector('.header')
let headerShadow = document.querySelector('.header--main')
let bodyScroll = document.querySelector('.body')

let feaTableLeft = document.querySelector('.table-features .tab-left')
let feaTableRight = document.querySelector('.table-features .tab-right')
let whyTableLeft = document.querySelector('.why-table .tab-left')
let whyTableRight = document.querySelector('.why-table .tab-right')

window.onscroll = function() {sCrollHeader()};

function sCrollHeader() {
    if (document.documentElement.scrollTop > 50) {
        headerMain.classList.add('header-scroll');
        headerShadow.classList.add('header--main-shadow');
        bodyScroll.classList.add('body-scroll');
    }
    else  {
        headerMain.classList.remove('header-scroll');
        headerShadow.classList.remove('header--main-shadow');
        bodyScroll.classList.remove('body-scroll');
    }

    if (document.documentElement.scrollTop < 400) {
        feaTableLeft.classList.add('displaySlideLeft');
        feaTableRight.classList.add('displaySlideRight');
    }
    else {
        feaTableLeft.classList.remove('displaySlideLeft');
        feaTableRight.classList.remove('displaySlideRight');
    }

    if (document.documentElement.scrollTop < 900) {
        whyTableLeft.classList.add('displaySlideLeft');
        whyTableRight.classList.add('displaySlideRight');
    }
    else {
        whyTableLeft.classList.remove('displaySlideLeft');
        whyTableRight.classList.remove('displaySlideRight');
    }
}
