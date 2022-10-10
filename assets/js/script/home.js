document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    setTimeout(() => {
      tlLoader.play()
    }, 3750)
  } 
};

let tlLoader = gsap.timeline({ paused: true, defaults: { ease: "power4", duration: 3} })
tlLoader.to('.toggle_loader', {'right': '50px', 'top': '50px'})
        .to('.overlay_loader', {'display': 'block'}, "<")
        .to('.toggle_loader span', {'animation': 'none', "position": "initial"}, "<")
        .to('.toggle_loader p', {'display': 'block', 'opacity': '1'}, "<")
        .to('.toggle_loader', {'width': '50px', 'aspect-ratio': "1 / 1"}, "<1")
        .to('.overlay_loader', {'clip-path': 'circle(70.7% at 50% 50%)'}, "<0.75")
        .to(".toggle_loader", {'opacity': '0'})
        .to(".wrap_loader", {'display': 'none', duration: 0}, "<")
        .to(".overlay_loader", {'opacity': '0'}, "<")
        .to(".overlay_loader", {'display': 'none', duration: 0})
        .to(".toggle_loader", {'display': 'none', duration: 0}, "<")
        .to('.overlay_hero', {'width': '0%', 'left': '25%', duration: 0.75, stagger: 0.03}, "<-1")
        .to('.overlay_hero', {'width': '50%', 'left': '100%', duration: 0.75, stagger: 0.03}, "<0.1")
        .to('.enzo_creative h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.75, stagger: 0.03}, "<")
        .to('.givernaud_developer h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.75, stagger: 0.03}, "<0.1")
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

