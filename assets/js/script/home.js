document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    setTimeout(() => {
      tlLoader.play()
    }, 3750)
  } 
};
const links = document.querySelectorAll("a")
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();
        locationLinks = this.href;
        console.log(locationLinks);
        let tlTransition = gsap.timeline({ paused: false, defaults: { ease: "power4", duration: 0.5, onComplete: function(){
            window.location.href = locationLinks;                                           
          }} })
        tlTransition.to('.overlay_transition', {"display": "flex", "clip-path": "circle(70% at 50% 50%)" })
    });
}
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
let tlHero = gsap.timeline({ defaults: { ease: "none"} })
tlHero
.to('.enzo', {y: -200})
.to('.creative', {y: -165}, "<")
.to('.givernaud', {y: -200}, "<")
.to('.developer', {y: -165}, "<")
.to('.wrap_text_scrolling', {'opacity': '0'})
.to('h1', {'opacity': '0'}, "<")
.to('.cd_about_me', {y: 0, x: 0, "top": "0", "left": "0"})
.to('.hero h1', {"opacity": "0"}, "<")
.to('.wrap_text_scrolling', {"opacity": "0"}, "<")
.to('.hero', {"border-radius": "50%", "aspect-ratio": "1", "width" : "7em", "height": "7em", "top": "21.5em", "left": "3.6em"}, "<")
.to('.basket-ball', {"z-index": "3", "opacity": "1"}, "<0.5")
.to('.hero', {"opacity": "0", "display": "none"})
.to('.text_about_1', {"opacity": "1", duration: 0.5}, "<")
.to('.basket-ball', {x: '100vw', "margin-left": "-12em", duration: 2})
.to('.cd-basket-ball', {y: "-65%", duration: 1, ease:'power4', duration: 2}, "<")
.to('.curve', {"clip-path": " circle(98.8% at 0 100%)", duration: 1.85, ease:'power4'}, "<")
.to('.text_about_1', {"opacity": "0", duration: 0.2}, "<0.2")
.to('.text_about_2', {"opacity": "1", duration: 0.2}, "<0.2")
.to('.text_about_2', {"opacity": "0", duration: 0.2}, "<0.2")
.to('.text_about_3', {"opacity": "1", duration: 0.2}, "<0.2")
.to('.text_about_3', {"opacity": "0", duration: 0.2}, "<0.2")
.to('.text_about_4', {"opacity": "1", duration: 0.2}, "<0.2")
.to('.text_about_4', {"opacity": "0", duration: 0.2}, "<0.2")
.to('.text_about_5', {"opacity": "1", duration: 0.2}, "<0.2")
.to('.cd-basket-ball', {y: "-20%", duration: 1, ease:'power4', duration: 2}, "<0.2")
.to('.curve', {"clip-path": "circle(121% at 0 100%)", duration: 0.5}, "<-0.1")
.to('.curry', {"right": "0", ease:'slow'})
.to('.curry', {"right": "-150px", ease:'slow'})
ScrollTrigger.create({
   animation: tlHero,
   trigger: '.hero',
   start: "top top",
   markers: false,
   end: 'max',
   pin: true,
   markers: true,
   scrub: true,
 })
