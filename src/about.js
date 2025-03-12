export default function AboutPage() {
  const container = document.createElement('main');

  const title = document.createElement('h1');
  title.textContent = 'About';
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'This is the about us page';

  container.appendChild(title);
  container.appendChild(subtitle);

  return container;
}
