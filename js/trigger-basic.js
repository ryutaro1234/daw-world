const title01 = gsap.timeline({
  scrollTrigger: {
    trigger: '.contents-table01',
    start: 'center center',
    scrub: true,
  }
});

title01.to('.trigger-basic01',
  { keyframes: [
    { duration: .5,
      ease: "power2.out",
      y: -125,
      scale: 1.6,
    },
    { duration: 1,
      ease: "power2.out",
      y: -300,
      scale: 1,
    }
  ]}
);
