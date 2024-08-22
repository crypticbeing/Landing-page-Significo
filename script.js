function homepageAnimation() {
    gsap.set(".slidesm", {
        scale: 5
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
    })

    tl
        .to(".videodiv", {
            '--clip': "0%",
            ease: Power2
        }, 'a')
        .to(".slidesm", {
            scale: 1,
            ease: Power2
        }, 'a')
        .to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power2
        }, 'b')
        .to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4
        }, 'b')
}

function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },

        xPercent: -320,
        ease: Power2
    })
}

function teamAnimation() {
    const listElems = document.querySelectorAll(".listelem");

    listElems.forEach((el, index, arr) => {
        const blueLayer = el.querySelector(".bluelayer");

        el.addEventListener("mousemove", function (dets) {
            // Move the ".pic-hover" element horizontally based on the mouse position
            gsap.to(this.querySelector(".pic-hover"), {
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                x: gsap.utils.mapRange(0, window.innerHeight, -60, 60, dets.clientX),
                opacity: 1,
                ease: "power4.out",
                duration: 0.5,
            });

            // For the first and last elements, animate the blue layer from 0% to 100%
            if (index === 0 || index === arr.length - 1) {
                gsap.fromTo(
                    blueLayer,
                    { height: "0%" },
                    {
                        height: "100%",
                        ease: "power2.inOut",
                        duration: 0.5,
                    }
                );
            } else {
                // For other elements, only set the blue layer to 100% height
                gsap.set(blueLayer, { height: "100%" });
            }
        });

        el.addEventListener("mouseleave", function (dets) {
            // Reset the ".pic-hover" element's opacity and horizontal position
            gsap.to(this.querySelector(".pic-hover"), {
                opacity: 0,
                x: 0,
                ease: "power4.out",
                duration: 0.5,
            });

            // For the first and last elements, animate the blue layer from 100% to 0% height
            if (index === 0 || index === arr.length - 1) {
                gsap.to(blueLayer, {
                    height: "0%",
                    ease: "power2.inOut",
                    duration: 1,
                });
            } else {
                // For other elements, only set the blue layer to 100% height
                gsap.set(blueLayer, { height: "0%" });
            }
        });
    });
}

document.querySelector(".splitpara")
    .textContent.split("")
    .forEach(function (e) {

    })

homepageAnimation();
realAnimation();
teamAnimation();



// script.js
const mousePointer = document.getElementById('mouse-pointer');

// Listen for mouse movement
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Update the position of the mouse pointer
    gsap.to(mousePointer, {
        x: x,
        y: y,
        duration: 0.1,
    });

    // Check if the mouse is in the last section
    const lastSection = document.querySelector('#section6');
    const isInLastSection = lastSection.getBoundingClientRect().top < window.innerHeight && lastSection.getBoundingClientRect().bottom > 0;

    // Scale up the mouse pointer if it's in the last section
    if (isInLastSection) {
        gsap.to(mousePointer, {
            scale: 3,
            duration: 0.3,
        });
    } else {
        gsap.to(mousePointer, {
            scale: 1,
            duration: 0.3,
        });
    }
});



//------------------------------//



