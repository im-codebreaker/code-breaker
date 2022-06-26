import gsap from 'gsap';
import './cursor';
import './main.scss';
import './index.scss';

let tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 3.5 } });

tl.to('.section_hero-baseline h1', {
  duration: 2,
  x: 0,
  'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',

}).to('.section_hero-baseline .subtitle', {
  opacity: 1,
  y: 0
})
  .to('.strategies_images-item', {
    y: 0,
    yoyo: true,
    repeat: -1
  })

const burgerButton: HTMLButtonElement | null = document.querySelector('.header_navbar-burger');

burgerButton?.addEventListener('click', (): void => {
  burgerButton.classList.toggle('open');
})