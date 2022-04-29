import './style.scss'
console.log('Hello World');

const burgerButton: HTMLButtonElement | null = document.querySelector('.header_navbar-burger');

burgerButton?.addEventListener('click', (): void => {
  burgerButton.classList.toggle('open');
})