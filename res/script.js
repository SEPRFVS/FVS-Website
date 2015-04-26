window.onload = function () {
    if (window.document.getElementsByTagName('header')[0]) {
        window.document.getElementsByTagName('header')[0].style.width = window.innerWidth + 'px';
    }
};

window.onscroll = function () {
    //Test if any part of mainmenu off screen and if so fix to top otherwise leave as is
    if (window.document.getElementById('mainmenu')) {
        if (window.document.getElementById('mainmenuholder').getBoundingClientRect().top < 0) {
            with (window.document.getElementById('mainmenuholder')) {
                style.height = window.document.getElementById('mainmenu').clientHeight + 'px';
            }
            window.document.getElementById('mainmenu').style.position = 'fixed';
        } else {
            window.document.getElementById('mainmenuholder').style.height = '1px';
            window.document.getElementById('mainmenu').style.position = 'relative';
        }
    }
};