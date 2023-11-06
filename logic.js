// ==== Header Toogle START ==== //
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn,addEventListener('click', ()=> {
    document.querySelector('body').classList.toggle('toggle-header')
    MenuBtn.classList.toggle('fa-xmark')  
})

console.log('Hello World')
// ==== Header Toogle END ==== //

// ================================================================================ //


// ==== Typing Animation START ==== //
let type = new Typed('.TypingAnimation',{
    strings: ['hold your best moment', 'capture your moment'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
})
// ==== Typing Animation END ==== //


// ================================================================================ //

// ==== Skill Bar Animation START ==== //
const progressBars = document. querySelectorAll('.inner-bar');
window.addEventListener('scroll', function() {
    progressBars.forEach(function (progressBar) {
        const rect = progressBar.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom >= 0) {
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width + '%'
        }
    })
})
// ==== Skill Bar Animation END ==== //

// ================================================================================ //

// ==== Active Link State On scroll START ==== //

// Get All Nav Links
let navLinks = document.querySelectorAll('header nav ul li a')
// Get all sections
let Section = document.querySelectorAll('section')
window.addEventListener('scroll', ()=> {
    const scrollPos = window.scrollY + 13
    Section.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add("active");
                }
            });
        }
    });
});
// ==== Active Link State On scroll END ==== //

// ================================================================================ //