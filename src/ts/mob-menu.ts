const toggleBtn: Element | null = document.querySelector('.mob-open-nav');
const body: Element | null = document.querySelector('body');
const mobMenu: Element | null = document.querySelector('.mob-menu');
const mobMenuBox: Element | null = document.querySelector('.mob-menu-box');
const links: NodeListOf<Element> = document.querySelectorAll('.link');

toggleBtn?.addEventListener('click', toggleNav);
mobMenu?.addEventListener('click', toggleNav);
links.forEach((link: Element) => {
  link.addEventListener('click', closeNav);
});

function toggleNav() {
  mobMenu?.classList.toggle('is-hidden');
  body?.classList.toggle('no-scroll');
  mobMenuBox?.classList.toggle('is-visible');

  toggleBtn?.classList.toggle('active');

  if (mobMenu?.classList.contains('is-hidden')) {
    toggleBtn?.classList.replace('mob-close-nav', 'mob-open-nav');
  } else {
    toggleBtn?.classList.replace('mob-open-nav', 'mob-close-nav');
  }
}

function closeNav() {
  mobMenu?.classList.add('is-hidden');
  body?.classList.remove('no-scroll');
  mobMenuBox?.classList.remove('is-visible');
  toggleBtn?.classList.replace('mob-close-nav', 'mob-open-nav');
}
