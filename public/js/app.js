const contactForm = document.querySelector('#contact-form');
const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const menuOpenIcon = document.querySelector('#menu-open-icon');
const menuCloseIcon = document.querySelector('#menu-close-icon');

function setMobileMenuState(isOpen) {
  mobileMenu?.classList.toggle('hidden', !isOpen);
  menuOpenIcon?.classList.toggle('hidden', isOpen);
  menuCloseIcon?.classList.toggle('hidden', !isOpen);
  mobileMenuToggle?.setAttribute('aria-expanded', String(isOpen));
  mobileMenuToggle?.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
}

mobileMenuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
  setMobileMenuState(!isOpen);
});

document.querySelectorAll('.mobile-menu-link').forEach((link) => {
  link.addEventListener('click', () => setMobileMenuState(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    setMobileMenuState(false);
  }
});

function sendEnquiry(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const message = [
    `Hello Simba Cement Company, my name is ${form.name.value}.`,
    `Phone: ${form.phone.value}`,
    `I need: ${form.need.value}`,
    form.message.value ? `Details: ${form.message.value}` : ''
  ].filter(Boolean).join('\n');

  window.open(
    `https://wa.me/254783372269?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );
}

contactForm?.addEventListener('submit', sendEnquiry);
