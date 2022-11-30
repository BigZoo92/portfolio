mediaTablette = window.matchMedia("(min-width: 1081px)")
if (mediaTablette.matches) { // If media query matches
let tlbeefrenchHero = gsap.timeline({defaults: { ease: "power4"} })
.to('.cd_web .img_hero_web',{"width": "35%", "left": "50%", "filter": "brightness(1)", y: 100})
.to('.cd_web h1',{"left": "10%", y: -150}, "<0.1")
ScrollTrigger.create({
 animation: tlbeefrenchHero,
 trigger: '.hero_web',
 start: "top top",
 end: 'bottom',
 scrub: 1,
 pin: true,
})

let tlbeefrenchHeroTxt = gsap.timeline({defaults: { ease: "sine"} })
.to('.hero_web .cd_txt_web h2',{"opacity": "1"})
.to('.hero_web .cd_txt_web p',{"opacity": "1"}, "<0.5")
ScrollTrigger.create({
 animation: tlbeefrenchHeroTxt,
 trigger: '.hero_web h1',
 start: "top",
 end: "max",
})

let tlbeefrenchSection1= gsap.timeline({defaults: { ease: "sine"} })
.to('.subcdweb1 .cd_txt_web h2',{"opacity": "1"})
.to('.subcdweb1 .cd_txt_web p',{"opacity": "1"}, "<0.25")
.to('.subcdweb1 img',{"clip-path": "inset(0 0 0 0)"}, "<0.1")
ScrollTrigger.create({
 animation: tlbeefrenchSection1,
 trigger: '.hero_web img',
 start: "bottom",
 end: "max",
})

let tlbeefrenchSection2= gsap.timeline({defaults: { ease: "sine"} })
.to('.subcdweb2 .cd_txt_web h2',{"opacity": "1"})
.to('.subcdweb2 .cd_txt_web p',{"opacity": "1"}, "<0.25")
.to('.subcdweb2 video',{"clip-path": "inset(0 0 0 0)"}, "<0.1")
ScrollTrigger.create({
 animation: tlbeefrenchSection2,
 trigger: '.subcdweb1 img',
 start: "bottom 50px",
 end: "max",
})

let tlbeefrenchSection3= gsap.timeline({defaults: { ease: "sine"} })
.to('.subcdweb3 .cd_txt_web h2',{"opacity": "1"})
.to('.subcdweb3 .cd_txt_web p',{"opacity": "1"}, "<0.25")
.to('.subcdweb3 img',{"clip-path": "inset(0 0 0 0)"}, "<0.1")
ScrollTrigger.create({
 animation: tlbeefrenchSection3,
 trigger: '.subcdweb2 video',
 start: "center",
 end: "max",
})

let tlbeefrenchSection4= gsap.timeline({defaults: { ease: "sine"} })
.to('.subcdweb4 img',{"clip-path": "inset(0 0 0 0)"})
.to('.subcdweb4 .cd_txt_web h2',{"opacity": "1"}, "<1")
.to('.subcdweb4 .cd_txt_web p',{"opacity": "1"}, "<0.25")
ScrollTrigger.create({
 animation: tlbeefrenchSection4,
 trigger: '.subcdweb3 img',
 start: "center",
 end: "max",
})

let tlbeefrenchSection5= gsap.timeline({defaults: { ease: "sine"} })
.to('.subcdweb5 video',{"clip-path": "inset(0 0 0 0)"})
.to('.subcdweb5 .cd_txt_web h2',{"opacity": "1"}, "<1")
.to('.subcdweb5 .cd_txt_web p',{"opacity": "1"}, "<0.25")
ScrollTrigger.create({
 animation: tlbeefrenchSection5,
 trigger: '.subcdweb4 img',
 start: "center",
 end: "max",
})

let tlbeefrenchSection6= gsap.timeline({defaults: { ease: "sine"} })
.to('.subcdweb6 img',{"clip-path": "inset(0 0 0 0)"})
.to('.subcdweb6 .cd_txt_web h2',{"opacity": "1"}, "<1")
.to('.subcdweb6 .cd_txt_web p',{"opacity": "1"}, "<0.25")
ScrollTrigger.create({
 animation: tlbeefrenchSection6,
 trigger: '.subcdweb5 video',
 start: "center",
 end: "max",
})
}else{
    AOS.init({
        once: true
    });
}