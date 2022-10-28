let tlGallery = gsap.timeline({defaults: { ease: "power4"} })
tlGallery  
.to('img',{x : -500})
ScrollTrigger.create({
 animation: tlGallery,
 trigger: 'body',
 start: "top top",
 end: 'max',
 scrub: 0.5,
 pin: true,
})
