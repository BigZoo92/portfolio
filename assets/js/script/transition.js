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
document.onreadystatechange = function() {
    if (document.readyState === "complete") {
      tlTransitionBis.play();
    } 
  };

let tlTransitionBis = gsap.timeline({ paused: true, defaults: { ease: "power4", duration: 0.5} })
tlTransitionBis.to('.toggle_loader span', {'animation': 'none', "position": "initial", duration: 0})
             .to('.toggle_loader .toggle_arm2', {"opacity": "0", duration: 0.5})
             .to('.toggle_loader span', {rotate: 45},"<0.5")
             .to('.toggle_loader', {x: "40vw", ease: "power4"},"<0.5")
             .to('.toggle_loader', {x: "-40vw"}, "<0.5")
             .to('.toggle_loader span', {rotate: -45}, "<0.5")
             .to('.toggle_loader', {x: "40vw"}, "<0.5")
             .to('.toggle_loader span', {"opacity": "1", rotate: 0}, "<0.5")
             .to('.toggle_loader', {'right': '50px', 'top': '50px', x: 0, y:0})
             .to('.toggle_loader', {'width': '50px', 'aspect-ratio': "1 / 1"}, "<0.25")
             .to('.toggle_loader p', {'display': 'block', 'opacity': '1'}, "<0.25")
             .to('.overlay_transition', {"clip-path": "circle(0% at 50% 50%)" }, "<0.75")
             .to('.overlay_transition', {"display": "none" })
             .to('.toggle_loader', {'right': 'initial', "top": "initial", 'width': '80px', 'aspect-ratio': "2 / 1", duration: 0}, "<")
             .to('.toggle_loader p', {'display': 'none', duration: 0}, "<")
