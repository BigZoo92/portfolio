document.querySelector('.menu_toggle').addEventListener("click", menuToggle);

function menuToggle() {
  console.log('wesh');
  const tlToggle = gsap.timeline({});
  tlToggle.to('.toggle_arm1', {y: -10, ease: 'back'});
  tlToggle.to('.toggle_arm2', {y: 10, ease: 'back'}, '<');
  tlToggle.to('.toggle_arm1', {x: -55, ease: 'power4'});
  tlToggle.to('.toggle_arm2', {x: 55, ease: 'power4'}, '<');
}

let tlHero = gsap.timeline({ defaults: { ease: "back"} })
tlHero.from('h1', {y: 300, duration: 1, stagger: 0.1});