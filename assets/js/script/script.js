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
  tlToggle.play()
}
function menuToggleBis() {
  choice = true;
  tlToggle.reverse();
}
 
let tlHoverToggle = gsap.timeline({paused : true, defaults: { ease: "sine", duration: 0.2} })
tlHoverToggle.to('.toggle_arm1', {'width': '50%'})
              .to('.toggle_arm2', {'width': '100%'}, "<")
function toggleMOver() {
  tlHoverToggle.play()
}
function toggleMOut() {
  tlHoverToggle.reverse()
}

let tlOverLi1 = gsap.timeline({paused : true, defaults: { ease: "sine", duration: 0.5, stagger: 0.05} })
tlOverLi1.to('.li_letter11', {y: -100})
         .to('.li_letter12', {y: -100}, "<")

function liOver1(){
  tlOverLi1.play()
  $( ".li_letter21" ).css("opacity", "0.5")
  $( ".li_letter31" ).css("opacity", "0.5")
  $( ".i1" ).css("opacity", "1")
}
function liOut1(){
  tlOverLi1.reverse()
  $( ".li_letter21" ).css("opacity", "1")
  $( ".li_letter31" ).css("opacity", "1")
  $( ".i1" ).css("opacity", "0.5")
}

let tlOverLi2 = gsap.timeline({paused : true, defaults: { ease: "sine", duration: 0.5, stagger: 0.05} })
tlOverLi2.to('.li_letter21', {y: -100})
         .to('.li_letter22', {y: -100}, "<")


function liOver2(){
  tlOverLi2.play()
  $( ".li_letter11" ).css("opacity", "0.5")
  $( ".li_letter31" ).css("opacity", "0.5")
  $( ".i2" ).css("opacity", "1")
}
function liOut2(){
  tlOverLi2.reverse()
  $( ".li_letter11" ).css("opacity", "1")
  $( ".li_letter31" ).css("opacity", "1")
  $( ".i2" ).css("opacity", "0.5")
}

let tlOverLi3 = gsap.timeline({paused : true, defaults: { ease: "sine", duration: 0.5, stagger: 0.05} })
tlOverLi3.to('.li_letter31', {y: -100})
         .to('.li_letter32', {y: -100}, "<")
function liOver3(){
  tlOverLi3.play()
  $( ".li_letter11" ).css("opacity", "0.5")
  $( ".li_letter21" ).css("opacity", "0.5")
  $( ".i3" ).css("opacity", "1")
}
function liOut3(){
  tlOverLi3.reverse()
  $( ".li_letter11" ).css("opacity", "1")
  $( ".li_letter21" ).css("opacity", "1")
  $( ".i3" ).css("opacity", "0.5")
}
