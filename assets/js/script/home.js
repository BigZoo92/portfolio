document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    setTimeout(() => {
      tlLoader.play()
    }, 3750)
  } 
};

let tlLoader = gsap.timeline({ paused: true, defaults: { ease: "power4", duration: 3} })
tlLoader
        .to('.toggle_loader', {'right': '50px', 'top': '18.5px'})
        .to('.overlay_loader', {'display': 'block'}, "<")
        .to('.toggle_loader span', {'animation': 'none', "position": "initial"}, "<")
        .to('.toggle_loader p', {'display': 'block', 'opacity': '1'}, "<")
        .to('.overlay_loader', {'clip-path': 'circle(70.7% at 50% 50%)'}, "<0.75")
        .to(".toggle_loader", {'opacity': '0'})
        .to(".wrap_loader", {'display': 'none', duration: 0}, "<")
        .to(".overlay_loader", {'opacity': '0'}, "<")
        .to(".overlay_loader", {'display': 'none', duration: 0})
        .to(".toggle_loader", {'display': 'none', duration: 0}, "<")
        .to('.overlay_hero', {'width': '0%', 'left': '25%', duration: 0.75})
        .to('.overlay_hero', {'width': '50%', 'left': '100%', duration: 0.75, stagger: 0.03}, "<0.1")
        .to('.enzo_creative h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.75, stagger: 0.03}, "<")
        .to('.givernaud_developer h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.75, stagger: 0.03}, "<0.1")
        .to('.hero', {"z-index": "10"})
let tlHeroBis = gsap.timeline({ defaults: { ease: "none"} })
tlHeroBis.to('.enzo', {y: -200})
         .to('.creative', {y: -165}, "<")
         .to('.givernaud', {y: -200}, "<")
         .to('.developer', {y: -165}, "<")
         .to('.wrap_text_scrolling', {'opacity': '0'})
         .to('h1', {'opacity': '0'}, "<")
         .to('.hero', {"border-radius": "50%", "aspect-ratio": "1", "width" : "10em", "height": "10em"})
ScrollTrigger.create({
   animation: tlHeroBis,
   trigger: '.hero',
   start: "top top",
   markers: false,
   end: 'max',
   pin: true,
   markers: true,
   scrub: true,
 })
 let tlBasket = gsap.timeline({ defaults: { ease: "none"} })
 tlBasket
          .to('.hero', {"border-radius": "50%", "aspect-ratio": "1", "width" : "10em", "height": "10em", "transform": "translate(68px, 320px)"})
 ScrollTrigger.create({
  animation: tlBasket,
  trigger: '.cd_about_me',
  start: "top top",
  markers: false,
  end: 'max',
  pin: true,
  markers: true,
  scrub: true,
})