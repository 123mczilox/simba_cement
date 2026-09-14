const contactForm = document.querySelector('#contact-form');

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
