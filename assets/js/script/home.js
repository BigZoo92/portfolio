let tlHeroTest = gsap.timeline({ defaults: { ease: "power4", duration: 0.75, stagger: 0.03} })
tlHeroTest.to('.overlay_hero', {'width': '0%', 'left': '25%'})
          .to('.overlay_hero', {'width': '50%', 'left': '100%'}, "<0.1")
          .to('.enzo_creative h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}, "<")
          .to('.givernaud_developer h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}, "<0.1")
let tlHeroBis = gsap.timeline({ defaults: { ease: "none", duration: 1} })
tlHeroBis.to('.enzo', {y: -200})
         .to('.creative', {y: -165}, "<")
         .to('.givernaud', {y: -200}, "<")
         .to('.developer', {y: -165}, "<")
ScrollTrigger.create({
   animation: tlHeroBis,
   trigger: '.hero',
   start: "1px",
   markers: false,
   end: 'max',
   pin: true,
   scrub: true,
 })

