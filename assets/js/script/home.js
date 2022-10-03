let tlHero = gsap.timeline({ defaults: { ease: "back", duration: 0.75, stagger: 0.03} })
tlHero.from('.letter1', {y: 300})
    .from('.letter2', {y: 300}, "<0.2")
