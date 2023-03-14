/* =================================== toggle icon navBar =================================== */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('ativo')
}


/* ================================ scroll sections active link ================================ */
let sessoes = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sessoes.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ativo')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo')
            })
        }
    })

    /* =================================== sticky navBar =================================== */
    let header = document.querySelector('header')

    header.classList.toggle('stick', window.scrollY > 100)

    /* ============ remove toggle icon and navBar when click navBar link (scroll) ============ */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('ativo')
}


/* ==================================== scroll reveal ==================================== */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.img-home, .servicos-container, .projetos-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .img-sobre', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ==================================== typed js ==================================== */
const typed = new Typed('.multiple-text', {
    strings: ['Dev Front-end', 'Entusiasta em Tecnologia'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})