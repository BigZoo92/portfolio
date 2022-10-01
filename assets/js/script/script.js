document.querySelector('.menu_toggle').addEventListener("click", choiceToggle);
let choice = true;
const tlToggle = gsap.timeline({paused : true, defaults: {duration: 0.4}})
tlToggle.to('.toggle_arm1', {y: -7, ease: 'back'})
          .to('.toggle_arm2', {y: 20, ease: 'back'}, '<')
          .to('.menu', {'clip-path' : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}, '<')
          .to('.toggle_arm1', {x: -55, 'background-color' : '#fff9f4', ease: 'power4'})
          .to('.toggle_arm2', {x: 55, 'background-color' : '#fff9f4', ease: 'power4'}, '<')
          .to('.close', {'clip-path' : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', color : '#fff9f4'}, '<')
          .to('.overlay_header', {y: '100vh', x: 0, ease: 'power4'}, '<')
          .to('.toggle_arm1', {x: 0, ease: 'power4'})
          .to('.toggle_arm2', {x: 0, ease: 'power4'}, '<')
function choiceToggle(){
  choice ? menuToggle() : menuToggleBis();
}
function menuToggle() {
  choice = false;
  console.log(choice);
  tlToggle.play()
}
function menuToggleBis() {
  choice = true;
  console.log(choice);
  tlToggle.reverse();
}

let tlHero = gsap.timeline({ defaults: { ease: "back", duration: 0.75, stagger: 0.03} })
tlHero.from('.letter1', {y: 300})
      .from('.letter2', {y: 300}, "<0.2")

      