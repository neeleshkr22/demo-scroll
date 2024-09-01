
gsap.registerPlugin(ScrollTrigger);

gsap.to("#left-image", {
    y: "-50%", 
    ease: "none",
    duration:2,
    delay:1,
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        markers: true ,
       
    }
});

gsap.fromTo("#right-image",{y:"-50%"}, {
    y: "60%", 
    ease: "none",
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "bottom 80%",
        scrub: 1,
        markers: true ,
       
    }
});

