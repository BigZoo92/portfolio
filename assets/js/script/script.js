document.querySelector('.menu_toggle').addEventListener("click", menuToggle);

function menuToggle() {
  console.log('wesh');
  const tlToggle = gsap.timeline({});
  tlToggle.to('.toggle_arm1', {y: -7, ease: 'back'})
          .to('.toggle_arm2', {y: 20, ease: 'back'}, '<')
          .to('.menu', {'clip-path' : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}, '<')
          .to('.toggle_arm1', {x: -55, ease: 'power4'})
          .to('.toggle_arm2', {x: 55, ease: 'power4'}, '<')
          .to('.close', {'clip-path' : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}, '<')
  
}

let tlHero = gsap.timeline({ defaults: { ease: "back", duration: 0.75, stagger: 0.03} })
tlHero.from('.letter1', {y: 300})
      .from('.letter2', {y: 300}, "<0.2")
