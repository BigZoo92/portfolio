
mediaTablette = window.matchMedia("(min-width: 1081px)")
if (mediaTablette.matches) { // If media query matches
  let tlLoader = gsap.timeline({defaults: { ease: "power4", duration: 3} })
  tlLoader
  .to('.overlay_hero', {'width': '0%', 'left': '25%', duration: 0.75})
  .to('.overlay_hero', {'width': '50%', 'left': '100%', duration: 0.75, stagger: 0.03}, "<0.1")
  .to('.enzo_creative h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.75, stagger: 0.03}, "<")
  .to('.givernaud_developer h1', {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.75, stagger: 0.03}, "<0.1")
  let tlAppear = gsap.timeline({ paused: true, defaults: { ease: "power4", duration: 0.5} })
  tlAppear  
  .from('.revealWorks',{y: "3em", duration: 0.75, stagger: 0.02, ease: "power2"})
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
  .to('.basket-ball', {"z-index": "2", "opacity": "1"}, "<0.5")
  .to('.hero', {"opacity": "0", "display": "none"})
  .to('.text_about_1', {"opacity": "1", duration: 0.5}, "<")
  .to('.basket-ball', {x: '100vw', "margin-left": "-12em", rotate: 720, duration: 2})
  .to('.cd-basket-ball', {y: "-45%", duration: 1, ease:'power4', duration: 2}, "<")
  .to('.text_about_1', {"opacity": "0", duration: 0.2}, "<0.2")
  .to('.text_about_2', {"opacity": "1", duration: 0.2}, "<0.2")
  .to('.text_about_2', {"opacity": "0", duration: 0.2}, "<0.2")
  .to('.text_about_3', {"opacity": "1", duration: 0.2}, "<0.2")
  .to('.text_about_3', {"opacity": "0", duration: 0.2}, "<0.2")
  .to('.text_about_4', {"opacity": "1", duration: 0.2}, "<0.2")
  .to('.text_about_4', {"opacity": "0", duration: 0.2}, "<0.2")
  .to('.text_about_5', {"opacity": "1", duration: 0.2}, "<0.2")
  .to('.cd-basket-ball', {y: "-20%", duration: 1, ease:'power4', duration: 2}, "<0.2")
  .to('.curry', {"right": "0", ease:'slow'})
  .to('.curry', {"right": "-150px", ease:'slow'})
  .to('.scroll_txt', {"opacity": "0"})
  .to('.cd_works', {"display": "flex", duration : 0 }, "<")
  .to('.cd_works', {"clip-path": "circle(111.8% at 50% 0)"}, "<")
  .to('.cd_works nav',  {"opacity": "1"}, "<")
  .to('.cd_works h1',  {"opacity": "1"}, "<")
  ScrollTrigger.create({
     animation: tlHero,
     trigger: 'body',
     start: "top top",
     end: 'max',
     pin: true,
     scrub: true,
     onLeave: () => tlAppear.play(),
     onLeaveBack: () => tlAppear.reverse()
   })
  
   let tlScrollRotate = gsap.timeline({defaults: { ease: "power4"} })
   tlScrollRotate.to('.scroll_txt',{"transform" : "rotate(360deg)"})
   ScrollTrigger.create({
    animation: tlScrollRotate,
    trigger: 'body',
    start: "top top",
    end: 'max',
    scrub: 1,
  })
  
  const liOverlay = document.querySelector('.overlay_links')
  const nbrLi = (document.querySelector('.list_works').childNodes.length - 1) / 2;
  const pourcentageLi = 100 / nbrLi
  let pourcentageDepartLi = 8 - pourcentageLi
  let tableauPourcentageLeftLi = []
  for (let i = 0; i < nbrLi; i++) {
    pourcentageDepartLi += pourcentageLi
    tableauPourcentageLeftLi[i] = pourcentageDepartLi
  }
  
   function liOverWorks(liWorks) {
    liOverlay.style.opacity = '0.75'
    let indexLi = parseInt(liWorks.className.split('_')[1]);
    let PourcentageLeftLi = tableauPourcentageLeftLi[indexLi - 1]
    liOverlay.style.left = 'calc('+PourcentageLeftLi+'vw + 15px)'
    liWorksChildren = liWorks.childNodes;
    liWorksShadow = liWorksChildren[3]
    liWorksShadow.classList.add('shadow_li')
    imgName= liWorksChildren[5].innerHTML
    imgWorks = document.querySelectorAll('.img_works')
    for (let i = 0; i < imgWorks.length; i++) {
        imgWorks[i].style.opacity = "0"
    }
    document.querySelector('.works_title').style.opacity = "0"
    document.querySelector('.'+imgName).style.opacity = "1";
    pointer.className = "pointer pointerbis"
  }
  
  function liOutWorks(liWorks) {
    liWorksChildren = liWorks.childNodes;
    liWorksShadow = liWorksChildren[3]
    liWorksShadow.classList.remove('shadow_li')
    pointer.className = "pointer"
  }
  
  
   
  }

