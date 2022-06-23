import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
import './main.scss';
import './index.scss';

gsap.registerPlugin(TextPlugin);

let tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 3.5 } });

tl.to('.line-1', {
  duration: 4,
  text: {
    value: "Code Breaker",
    delimiter: ""
  },
}).to('.section_hero-baseline .subtitle', {
  opacity: 1
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