gsap.registerPlugin(ScrollTrigger);

let tlAudioProject = gsap.timeline({ defaults: { ease: "back", duration: 0.5 } })
tlAudioProject.to('.audiovisuel_chiffre_1', { y: -100 })
  .to('.audiovisuel_chiffre_2', { y: -100 }, "<")
  .to('.titre1 h2', { y: '-20vh', stagger: 0.03 }, "<")
  .to('.titre2 h2', { y: '-20vh', stagger: 0.03 }, "<")
  .to('.docu', { y: '-30vh' }, "<")
  .to('.pub', { y: '-35vh' }, "<")
  .to('.motion', { y: '-25vh' }, "<")
let tlAudioProjectBis = gsap.timeline({ defaults: { ease: "back", duration: 0.5 } })
tlAudioProjectBis.to('.audiovisuel_chiffre_2', { y: -100 }, "<")
  .to('.audiovisuel_chiffre_3', { y: -100 }, "<")
  .to('.titre2 h2', { y: '-20vh', stagger: 0.03 }, "<")
  .to('.titre3 h2', { y: '-2Ovh', stagger: 0.03 }, "<")
  .to('.docu', { y: '-30vh' }, "<")
  .to('.pub', { y: '-35vh' }, "<")  
  .to('.motion', { y: '-25vh' }, "<")
ScrollTrigger.create({
  animation: tlAudioProject,
  trigger: '.audiovisuel_project',
  start: "1px",
  end: 'max',
  pin: true,
  onEnter: self => {
    $('.titre2 h2').css("display", "block")
    $('.audiovisuel_chiffre_2').css("display", "block")
  },
  onLeaveBack: self => {
    $('.titre2 h2').css("top", "20vh")
    $('.audiovisuel_chiffre_2').css("top", "100px")
    tlAudioProject.reverse()
  },

})
ScrollTrigger.create({
  animation: tlAudioProjectBis,
  trigger: '.marker',
  start: "bottom",
  end: 'max',
  pin: true,
  onEnter: self => {
    $('.audiovisuel_chiffre_2').css("display", "none")
    $('.titre2 h2').css("display", "block")
    console.log('wesh');
  },
  onLeaveBack: self => {
    $('.titre2 h2').css("display", "block")
    $('.titre2 h2').css("display", "top", "0")
    $('.audiovisuel_chiffre_2').css("display", "block")
    $('.audiovisuel_chiffre_2').css("top", "0")
    tlAudioProjectBis.reverse()
  }
})

