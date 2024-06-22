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
counterTl.from("#counter-text", {
    duration: 1,
    opacity: 0,
    y: 50
});

gsap.from('#testimonials', {
    scrollTrigger: '#testimonials',
    opacity: 0,
    duration: 1,
    y: 100
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
circleTl.from(".circle-animation", {
        duration: 5,
        scale: 0,
        opacity: 0
    })
    .to(".circle-animation", {
        duration: 1,
    });


let textBelowCircle = gsap.timeline({
    scrollTrigger: {
        trigger: ".Nulla-text",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "restart none none reset"
    }
},);

textBelowCircle.from(".Nulla-text", {
        duration: 5,
        scale: 0,
        opacity: 0
    })
    .to(".Nulla-text", {
        duration: 1,
    });
document.addEventListener('DOMContentLoaded', function () {
    // Parallax effect for the banner
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        document.querySelector('.banner').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});


// winning section canvas circle draw

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var radius = 120;
var endPercent = 110;
var curPer = 0;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

ctx.lineWidth = "10";
ctx.strokeStyle = 'black';
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.shadowBlur = 1;
ctx.shadowColor = "#656565"
// ctx.scrollY = ".cnvs";

function draw(currentPerc) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(350, 350, radius, -quart, (circ * currentPerc) - quart, false); // x, y, radius, start angle, end angle, 
    //false/ true <-- this false / true define clockwise and anticlockwise
    ctx.stroke();
    curPer++;

    if (curPer < endPercent) {
        requestAnimationFrame(function () {
            draw(curPer / 100);
        });
    }
}

// window.onscroll = draw()

document.addEventListener("DOMContentLoaded", function () {
    const targetSection = document.getElementById('winning');
    const circle = document.getElementById('myCanvas');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(targetSection);
                window.onscroll = draw();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(targetSection);
});


// counter slider

const slideContainer = document.querySelector('.slide-container');
let slideIndex = 0;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % 3;
    const translateX = -slideIndex * 100;
    slideContainer.style.transform = `translateX(${translateX}%)`;
}

setInterval(showNextSlide, 3000);



// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.movable');

//     images.forEach(img => {
//         moveImage(img);
//     });

//     function moveImage(img) {
//         let x = Math.random() * window.innerWidth;
//         let y = Math.random() * window.innerHeight;
//         let dx = (Math.random() - 0.5) * 5; // Random speed in x direction
//         let dy = (Math.random() - 0.5) * 5; // Random speed in y direction

//         function updatePosition() {
//             x += dx;
//             y += dy;

//             // Bounce off walls
//             if (x < 400 || x > window.innerWidth - img.width) {
//                 dx = -dx;
//             }
//             if (y < 668 || y > window.innerHeight - img.height) {
//                 dy = -dy;
//             }

//             img.style.left = x + 'px';
//             img.style.top = y + 'px';

//             requestAnimationFrame(updatePosition);
//         }

//         updatePosition();
//     }
// });


// var windowSize = window.innerWidth;

// if (windowSize >= 600) {
//     console.log('Greater than 768');
//     document.querySelectorAll('art1').addClass = 'moving-image';
// } else {
//     document.querySelectorAll('art1').removeClass  = 'moving-image';
// }
    
