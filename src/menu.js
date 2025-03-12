export default function MenuPage() {
  const container = document.createElement('main');

  const title = document.createElement('h1');
  title.textContent = 'Menu';
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'This is the menu';

  container.appendChild(title);
  container.appendChild(subtitle);

  return container;
}
