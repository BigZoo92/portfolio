let urlcourante = document.location.href;
urlcourante = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 )
document.querySelector('.nom_page').innerHTML = urlcourante
document.querySelector('.Transition').innerHTML = urlcourante
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
tlTransitionBis.to('.toggle_loader .toggle_arm2', {"opacity": "0" }, "<0.75")
               .to('.toggle_loader span', {"animation": "none" }, "<0.75")
               .to('.toggle_loader .toggle_arm1', {x: '-40vw'}, "<0.1")
               .to('.toggle_loader .toggle_arm1', {"width": "80vw" }, "<0")
               .to('.nom_page', {y: "-50vh" }, "<0.75")
               .to('.toggle_loader', {y: "-30vh" }, "<")
               .to('.overlay_transition', {"clip-path": "circle(0% at 50% 50%)" }, "<0.75")
               .to('.overlay_transition', {"display": "none" })
               .to('.cd_nom_page', {"display": "none" }, "<")
               .to('.toggle_loader', {"display": "none" }, "<")
