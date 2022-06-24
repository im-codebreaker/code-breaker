import gsap from 'gsap';
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

interface Cursor {
  x: number,
  y: number,
  element: HTMLDivElement | null
}

const cursorDot: Cursor = {
  x: 0,
  y: 0,
  element: document.querySelector('.cursor_dot')
}

const burgerButton: HTMLButtonElement | null = document.querySelector('.header_navbar-burger');

burgerButton?.addEventListener('click', (): void => {
  burgerButton.classList.toggle('open');
})

window.addEventListener('load', () => {
  if (cursorDot.element) {
    const links: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll('a');

    links.forEach((link: HTMLAnchorElement): void => {
      link.addEventListener('mouseenter', () => {
        cursorDot.element.classList.add('enter');
      })
      link.addEventListener('mouseleave', () => {
        cursorDot.element.classList.remove('enter');
      })
    })

    document.addEventListener('mousemove', (event: MouseEvent) => {
      cursorDot.element.style.top = `${event.pageY}px`
      cursorDot.element.style.left = `${event.pageX}px`
    })
  } else {
    document.documentElement.style.cursor = 'default';
  }
})