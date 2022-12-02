
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
  else{
    let tlProjectMobile1 = gsap.timeline({ defaults: { ease: "none"} })
    tlProjectMobile1.to('.cd_project_mobile:nth-of-type(1)', {'width': '100%', duration: 0.5, ease: "since"}, "<-0.001")
    tlProjectMobile1.to('.cd_project_mobile:nth-of-type(1) h4', {'font-size': '3.5em', duration: 0.5, ease: "since"}, "<")
    tlProjectMobile1.to('.cd_project_mobile:nth-of-type(1) .overlay_project_mobile', {'clip-path': 'inset(0 100% 0 0)'}, "<-0.5")
    ScrollTrigger.create({
      animation: tlProjectMobile1,
      trigger: '.hero_mobile h1',
      start: "top top",
    })
    let tlProjectMobile2 = gsap.timeline({ defaults: { ease: "none"} })
    tlProjectMobile2.to('.cd_project_mobile:nth-of-type(2)', {'width': '100%', duration: 0.5, ease: "since"}, "<-0.001")
    tlProjectMobile2.to('.cd_project_mobile:nth-of-type(2) h4', {'font-size': '3.5em', duration: 0.5, ease: "since"}, "<")
    tlProjectMobile2.to('.cd_project_mobile:nth-of-type(2) .overlay_project_mobile', {'clip-path': 'inset(0 100% 0 0)'}, "<-0.5")
    ScrollTrigger.create({
      animation: tlProjectMobile2,
      trigger: '.cd_project_mobile:nth-of-type(1)',
      start: "top top",
    })
    let tlProjectMobile3 = gsap.timeline({ defaults: { ease: "none"} })
    tlProjectMobile3.to('.cd_project_mobile:nth-of-type(3)', {'width': '100%', duration: 0.5, ease: "since"}, "<-0.001")
    tlProjectMobile3.to('.cd_project_mobile:nth-of-type(3) h4', {'font-size': '3.5em', duration: 0.5, ease: "since"}, "<")
    tlProjectMobile3.to('.cd_project_mobile:nth-of-type(3) .overlay_project_mobile', {'clip-path': 'inset(0 100% 0 0)'}, "<-0.5")
    ScrollTrigger.create({
      animation: tlProjectMobile3,
      trigger: '.cd_project_mobile:nth-of-type(2)',
      start: "top top",
    })
    let tlProjectMobile4 = gsap.timeline({ defaults: { ease: "none"} })
    tlProjectMobile4.to('.cd_project_mobile:nth-of-type(4)', {'width': '100%', duration: 0.5, ease: "since"}, "<-0.001")
    tlProjectMobile4.to('.cd_project_mobile:nth-of-type(4) h4', {'font-size': '3.5em', duration: 0.5, ease: "since"}, "<")
    tlProjectMobile4.to('.cd_project_mobile:nth-of-type(4) .overlay_project_mobile', {'clip-path': 'inset(0 100% 0 0)'}, "<-0.5")
    ScrollTrigger.create({
      animation: tlProjectMobile4,
      trigger: '.cd_project_mobile:nth-of-type(3)',
      start: "top top",
    })
    let tlProjectMobile5 = gsap.timeline({ defaults: { ease: "none"} })
    tlProjectMobile5.to('.cd_project_mobile:nth-of-type(5)', {'width': '100%', duration: 0.5, ease: "since"}, "<-0.001")
    tlProjectMobile5.to('.cd_project_mobile:nth-of-type(5) h4', {'font-size': '3.5em', duration: 0.5, ease: "since"}, "<")
    tlProjectMobile5.to('.cd_project_mobile:nth-of-type(5) .overlay_project_mobile', {'clip-path': 'inset(0 100% 0 0)'}, "<-0.5")
    ScrollTrigger.create({
      animation: tlProjectMobile5,
      trigger: '.cd_project_mobile:nth-of-type(4)',
      start: "top top",
    })
  }

