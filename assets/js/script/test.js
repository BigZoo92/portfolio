let test = gsap.timeline({})
test.to('.wave', {"clip-path": " circle(70.7% at 50% 50%)", duration: 2, ease:'none'})
ScrollTrigger.create({
  animation: test,
  trigger: '.test',
  start: "top",
  end: 'max',
  pin: true,
  markers: true,
  scrub: true,
})    
