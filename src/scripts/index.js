import '../styles/index.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

function init() {
  createNavigation();
  createContentContainer();
  createFooter();
  loadHome(); 
}

function createNavigation() {
  const nav = document.createElement('nav');
  const content = document.getElementById('content');
  const buttons = [
    { text: 'Главная', id: 'home', active: true },
    { text: 'Меню', id: 'menu' },
    { text: 'Контакты', id: 'contact' }
  ];

  buttons.forEach(btn => {
    const button = createNavButton(btn.text, btn.id, btn.active);
    nav.appendChild(button);
  });

  content.appendChild(nav);
  nav.addEventListener('click', switchTab);
}

function createNavButton(text, id, isActive = false) {
  const button = document.createElement('button'); 
  button.textContent = text;
  button.id = id;
  button.className = 'nav-item' + (isActive ? ' active' : '');
  button.setAttribute('aria-current', isActive ? 'page' : 'false'); 
  return button;
}

function createContentContainer() {
  const container = document.createElement('main'); 
  container.id = 'main-content'; 
  container.className = 'container';
  document.getElementById('content').appendChild(container);
}

function createFooter() {
  const footer = document.createElement('footer');
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'YouTube', url: 'https://youtube.com' }
  ];
  
  socialLinks.forEach(site => {
    const link = document.createElement('a');
    link.href = site.url;
    link.textContent = site.name;
    link.target = '_blank';
    link.rel = 'noopener noreferrer'; 
    link.className = 'footer-item';
    footer.appendChild(link);
  });
  
  document.getElementById('content').appendChild(footer);
}

function switchTab(event) {
  const button = event.target.closest('.nav-item'); 
  
  if (!button) return;
  
  document.querySelectorAll('.nav-item').forEach(btn => {
    const isActive = btn === button;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  const container = document.querySelector('.container');
  container.innerHTML = '';
  
  switch(button.id) {
    case 'home':
      loadHome();
      break;
    case 'menu':
      loadMenu();
      break;
    case 'contact':
      loadContact();
      break;
    default:
      loadHome();
  }
}

document.addEventListener('DOMContentLoaded', init);