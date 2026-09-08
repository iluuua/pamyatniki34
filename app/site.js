const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
}
menuButton.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? 'Закрыть меню' : 'Открыть меню');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);

// No scroll-blocking listeners or hidden sections: text is readable immediately.
for (const image of document.querySelectorAll('img')) {
  const showImage = () => image.classList.add('media-loaded');
  if (image.complete && image.naturalWidth) showImage();
  else image.addEventListener('load', showImage, { once: true });
}

for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = 'Номер скопирован. Вставьте его в поиск MAX.';
    } catch {
      status.textContent = 'Скопируйте номер вручную: +7 927 538-74-74.';
    }
  });
}

const viewer = document.querySelector('.photo-viewer');
const viewerContent = viewer.querySelector('.photo-viewer-content');
const closePhoto = () => viewer.close();
viewer.querySelector('.photo-close').addEventListener('click', closePhoto);
viewer.addEventListener('click', event => {
  if (event.target === viewer) closePhoto();
});
for (const link of document.querySelectorAll('.gallery-open')) {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    const source = link.querySelector('.photo-frame') || link.querySelector('img');
    const photo = source.cloneNode(true);
    const image = photo.tagName === 'IMG' ? photo : photo.querySelector('img');
    image.removeAttribute('srcset');
    image.removeAttribute('sizes');
    image.setAttribute('fetchpriority', 'high');
    if (photo.classList.contains('photo-frame')) {
      const scale = Number(photo.style.getPropertyValue('--crop-scale'));
      photo.style.setProperty('--display-ratio', String(Number(image.width) / (Number(image.height) / scale)));
    }
    viewerContent.replaceChildren(photo);
    viewer.showModal();
  });
}
viewer.addEventListener('close', () => viewerContent.replaceChildren());
