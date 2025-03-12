export default function HomePage() {
  const container = document.createElement('main');

  const title = document.createElement('h1');
  title.textContent = 'Home';
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'Fran-Restaurant Home Page';

  container.appendChild(title);
  container.appendChild(subtitle);

  return container;
}
