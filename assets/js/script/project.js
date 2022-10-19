let tlImageProject = gsap.timeline({defaults: { ease: "back", duration: 0.5, stagger: 0.01} })
tlImageProject  
.to('.cd_info_project h2',{"clip-path": "polygon(0 100%, 100% 100%, 100% 0, 0 0)"})
.to('.cd_info_project h3',{"clip-path": "polygon(0 100%, 100% 100%, 100% 0, 0 0)"})
.to('.cd_info_project p',{"clip-path": "polygon(0 100%, 100% 100%, 100% 0, 0 0)"})

