// cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

gsap.registerPlugin(ScrollTrigger);

let revealAnimations = [];

// smooth scroll

const lenis = new Lenis({
  lerp: 0.07
});

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

// for text reveal

document.querySelectorAll('.about-me').forEach(text => {
  let splitText = new SplitType(text, {
    type: 'words'
  })

  const section = text.closest('section');
  gsap.from(splitText.words, {
    opacity: 0,
    ease: 'none',
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: section,
      start: 'top top', 
      end: () => `+=${window.innerHeight * 5}px`,
      scrub: true,
      pin: true,
    }
  })
})

// for horizontal scroll

let sections = gsap.utils.toArray(".child");
    
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".parent",
    pin: ".parent",
    pinSpacing: true,
    scrub: 1,
    end: "+=3000",
  }
});

gsap.to('.next-block',{
  backgroundColor:'transparent',
  scrollTrigger:{
    trigger:'.next-block',
    pinnedContainer: ".horizontal-slider",
    start:'top 50%',
    toggleActions: 'play none reset none',
  }
})

// for entrance hero section

gsap.from(".section-one .hero", {
    duration: 1.5,      
    y: 50,              
    opacity: 0,         
    stagger: 0.3,       
    ease: "power3.out", 
    delay: 2,
});

// for entrance scrolldown

gsap.from(".scroll-down", {
  duration: 1.5,      
  y: -100,              
  opacity: 0,         
  stagger: 0.3,       
  ease: "power3.out", 
  delay: 3.5,
});

// for header

gsap.from("header .navbar-brand, header .navbar-toggler", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
  });

  gsap.from("header .navbar-nav .nav-item", {
    duration: 1,
    y: -30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.5
  });

  gsap.from("header .button", {
    duration: 1,
    y: -30,
    opacity: 0,
    ease: "power3.out",
    delay: 1.2
  });



// contact section animation



// Function to animate each heading sequentially
function animateHeadings() {
  const headings = gsap.utils.toArray(".section-four h3");

  headings.forEach((heading, index) => {
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1, // Animation duration
        scrollTrigger: {
          trigger: heading,
          start: "top 80%", // Animation starts when top of heading reaches 80% of viewport
          end: "top 50%", // Animation ends when top of heading reaches 50% of viewport
          scrub: true, // Smooth animation relative to scroll speed
          // markers: true, // Remove markers in production
        },
      }
    );
  });
}

// Call the animateHeadings function
animateHeadings();

// all headings

// Function to animate each heading sequentially
function animateHeadings2() {
  const headings = gsap.utils.toArray(".heading h2");

  headings.forEach((heading, index) => {
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1, // Animation duration
        scrollTrigger: {
          trigger: heading,
          start: "top 80%", // Animation starts when top of heading reaches 80% of viewport
          end: "top 50%", // Animation ends when top of heading reaches 50% of viewport
          scrub: true, // Smooth animation relative to scroll speed
          // markers: true, // Remove markers in production
        },
      }
    );
  });
}

// Call the animateHeadings function
animateHeadings2();

// contact section animation

// Function to animate each heading sequentially
function animateHeadings3() {
  const headings = gsap.utils.toArray(".section-five");

  headings.forEach((heading, index) => {
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        x: 500,
        scale: (0.6)
      },
      {
        x: 0,
        scale: (1),
        opacity: 1,
        duration: 1, // Animation duration
        scrollTrigger: {
          trigger: heading,
          start: "top 80%", // Animation starts when top of heading reaches 80% of viewport
          end: "top 50%", // Animation ends when top of heading reaches 50% of viewport
          scrub: true, // Smooth animation relative to scroll speed
          // markers: true, // Remove markers in production
        },
      }
    );
  });
}

animateHeadings3();


// particles

particlesJS("particles-js", {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 631.3280775270874
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
