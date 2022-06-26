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