import './styles.css';
import HomePage from './home.js';
import MenuPage from './menu.js';
import AboutPage from './about.js';

const content = document.querySelector('.content');
const menuButtons = document.querySelectorAll('button');
let pages = [HomePage, MenuPage, AboutPage];

menuButtons.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    menuButtons.forEach((button) => button.classList.remove('active'));
    btn.classList.add('active');
    content.replaceChildren();
    content.appendChild(pages[index]());
  });
});

content.appendChild(HomePage());
menuButtons[0].classList.add('active');
