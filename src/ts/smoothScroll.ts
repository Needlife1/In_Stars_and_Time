document.addEventListener('DOMContentLoaded', smoothScroll);

function smoothScroll() {
  const links: NodeListOf<Element> = document.querySelectorAll('.scroll');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e: Event) => {
      e.preventDefault();

      const target = e.target as HTMLAnchorElement;
      const blockID: string = target.getAttribute('href')!.substr(1);

      document.getElementById(blockID)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
