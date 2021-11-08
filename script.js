let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar')
let section = document.querySelectorAll('section')
let scrolltop = document.querySelector('#scroll-top')

menu.onclick = function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

for (let i = 0; i < section.length; i++) {
    section[i].onclick = function() {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}
window.onload = fadeOut();

window.onscroll = () => {
    if (window.scrollY > 60) {
        scrolltop.classList.add('active');
    } else {
        scrolltop.classList.remove('active');
    }
}