/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

// NEW: reveal each skill card nicely
sr.reveal('.skill-card',{ interval: 200 });

// Reveal Work cards one by one
sr.reveal('.work-card', {
    origin: 'bottom',
    distance: '50px',
    interval: 200   // each card comes with a delay
});

// Reveal Contact section (form from left, info from right)
sr.reveal('.contact__form', {
    origin: 'left',
    distance: '60px',
    delay: 100
});
sr.reveal('.contact__info', {
    origin: 'right',
    distance: '60px',
    delay: 100
});

// Reveal Tools icons one by one
sr.reveal('.tool-item', {
    origin: 'bottom',
    distance: '40px',
    interval: 150
});


// Reveal Work cards
sr.reveal('.work-card', {
  origin: 'bottom',
  distance: '50px',
  interval: 200
});

// Reveal Tools
sr.reveal('.tool-item', {
  origin: 'bottom',
  distance: '40px',
  interval: 150
});

// Reveal Projects
sr.reveal('.project-card', {
  origin: 'bottom',
  distance: '50px',
  interval: 200
});

// Reveal Contact (form left, info right)
sr.reveal('.contact__form', {
  origin: 'left',
  distance: '60px',
  delay: 200
});
sr.reveal('.contact__info', {
  origin: 'right',
  distance: '60px',
  delay: 400
});


// Reveal About Cards on Scroll
const cards = document.querySelectorAll(".about__card");

function revealCards() {
  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show-card");
    }
  });
}

window.addEventListener("scroll", revealCards);
revealCards(); // run on load


