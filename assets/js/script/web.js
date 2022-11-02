let tlbeefrenchHero = gsap.timeline({defaults: { ease: "power4"} })
tlbeefrenchHero.to('.cd_web .img_hero_web',{"width": "35%", "left": "40%", "filter": "brightness(1)", y: 100})
.to('.cd_web h1',{"font-size": "7.55vw", "left": "9.5vw", y: -150}, "<")
ScrollTrigger.create({
 animation: tlbeefrench,
 trigger: '.hero_web',
 start: "top top",
 end: 'bottom',
 markers: true,
 scrub: true,
 pin: true,
})

let tlbeefrenchHeroTxt = gsap.timeline({defaults: { ease: "power4"} })
tlbeefrenchHeroTxt.to('.cd_web .img_hero_web',{"width": "35%", "left": "40%", "filter": "brightness(1)", y: 100})
.to('.cd_web h1',{"font-size": "7.55vw", "left": "9.5vw", y: -150}, "<")
ScrollTrigger.create({
 animation: tlbeefrench,
 trigger: '.hero_web',
 start: "top top",
 end: 'bottom',
 markers: true,
 scrub: true,
 pin: true,
})