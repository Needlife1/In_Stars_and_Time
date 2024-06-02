document.addEventListener('DOMContentLoaded', () => {
  const closeBtn: Element | null = document.querySelector('.join-btn');
  const join = document.querySelector('.join') as HTMLElement;

  setTimeout(() => {
    if (join) {
      join.style.transform = 'translateX(0)';
    }
  }, 8000);

  closeBtn?.addEventListener('click', () => {
    if (join) {
      join.style.transform = 'translateX(-110%)';
    }
  });
});
