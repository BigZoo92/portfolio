let locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".cd_image_project", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});
let tlAppearProjectText = gsap.timeline({})
tlAppearProjectText  
.to('.cd_info_project h2',{"clip-path": "inset(0 0 0 0)"}, "<")
.to('.cd_info_project h3',{"clip-path": "inset(0 0 0 0)"}, "<0.25")
.to('.mediaProject1',{"clip-path": "inset(0 0 0 0)"}, "<-0.1")
.from('.mediaProject1 img',{scaleX: 1.2}, "<0.5")
.to('.cd_info_project p',{"clip-path": "inset(0 0 0 0)"}, "<-0.25")
let tlAppearProjectBackToTop = gsap.timeline({paused: true, defaults: {duration: 0.3, ease: "power2"}})
tlAppearProjectBackToTop  
.from('.mediaProjectPhantom',{"opacity": "O"})

  let tlAppearMedia1 = gsap.timeline({})
  tlAppearMedia1  
  .to('.mediaProject2',{"clip-path": "inset(0 0 0 0)"}, "<-0.1")
  ScrollTrigger.create({
    animation: tlAppearMedia1,
    trigger: ".mediaProject1",
    start: "top",
    scroller: ".smooth-scroll",   
    markers: true,
    toggleActions: "restart none none reverse"
  })

  let tlAppearMedia2 = gsap.timeline({})
  tlAppearMedia2  
  .to('.mediaProject3',{"clip-path": "inset(0 0 0 0)"}, "<-0.1")
  ScrollTrigger.create({
    animation: tlAppearMedia2,
    trigger: ".mediaProject2",
    start: "top",
    scroller: ".smooth-scroll",   
    markers: true,
    toggleActions: "restart none none reverse"
  })
 
  let tlAppearMedia3 = gsap.timeline({})
  tlAppearMedia3  
  .to('.mediaProject4',{"clip-path": "inset(0 0 0 0)"}, "<-0.1")
  ScrollTrigger.create({
    animation: tlAppearMedia3,
    trigger: ".mediaProject3",
    start: "top",
    scroller: ".smooth-scroll",   
    markers: true,
    toggleActions: "restart none none reverse"
  })

  let tlAppearMedia5 = gsap.timeline({})
  tlAppearMedia5  
  .to('.mediaProject5',{"clip-path": "inset(0 0 0 0)"}, "<-0.1")
  ScrollTrigger.create({
    animation: tlAppearMedia5,
    trigger: ".mediaProject4",
    start: "top",
    end: "max",
    scroller: ".smooth-scroll",   
    markers: true,
    toggleActions: "restart none none reverse",
    onLeave: () => tlAppearProjectBackToTop.play(),
   onLeaveBack: () => tlAppearProjectBackToTop.reverse()
  })


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
