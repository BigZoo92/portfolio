gsap.registerPlugin(ScrollTrigger);
function scrollAudioviuelProject(){
    ScrollTrigger.refresh(true)
    console.log('wesh');
}
let tlAudioProject = gsap.timeline({defaults: { ease: "power4", duration: 0.5 } })
gsap.utils.toArray(".numFilm").forEach((numFilm, i) => {
    tlAudioProject.to(numFilm, { y: -100 })
})
tlAudioProject.to('.audiovisuel_chiffre_1', { y: -100 })
    .to('.audiovisuel_chiffre_2', { y: -100 }, "<")
    .to('.audiovisuel_chiffre_3', { y: -100 }, "<")
    .to('.titre1 h2', { y: '-20vh', stagger: 0.03 }, "<")
    .to('.titre2 h2', { y: '-20vh', stagger: 0.03 }, "<")
    .to('.titre3 h2', { y: '-2Ovh', stagger: 0.03 }, "<")
    .to('.docu', { y: '-30vh' }, "<")
    .to('.pub', { y: '-35vh' }, "<")
    .to('.motion', { y: '-40vh' }, "<")
ScrollTrigger.create({
    animation: tlAudioProject,
        trigger: '.audiovisuel_project',
        start: "top top",
        pin: true,
        markers: true,
        snap: {
            snapTo: 1,
            duration: 1,
            delay: 0
          },
        onLeave: self => {
            self.scroll(self.start + 1);
            ScrollTrigger.update();
          },
          onLeaveBack: self => {
            self.scroll(self.end - 1);
            ScrollTrigger.update();
          }
})

