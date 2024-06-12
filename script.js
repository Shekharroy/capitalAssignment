// Fixed Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// GSAP Parallax Effect
gsap.registerPlugin(ScrollTrigger);

gsap.to('#banner', {
    scrollTrigger: {
        trigger: '#banner',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    backgroundPosition: '50% 100%'
});

// GSAP Animations
gsap.from('#content-section', {
    scrollTrigger: '#content-section',
    opacity: 0,
    duration: 1,
    y: 100
});

  // Counter text animation
  let counterTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#counters",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        pin: true
    }
});
counterTl.from("#counter-text", { duration: 1, opacity: 0, y: 50 });

gsap.from('#testimonials', {
    scrollTrigger: '#testimonials',
    opacity: 0,
    duration: 1,
    y: 100
});

// Splide Slider Initialization
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        autoplay: true,
        interval: 5000
    }).mount();
});


// Circle animation
let circleTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".circle-animation",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "restart none none reset"
    }
});
circleTl.from(".circle-animation", { duration: 1, scale: 0, opacity: 0 })
       .to(".circle-animation", { duration: 1, rotation: 360 });


