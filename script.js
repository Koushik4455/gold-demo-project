const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiryForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  // Replace this demo number with the client's verified WhatsApp number before launch.
  const businessWhatsAppNumber = '919876543210';
  const text = [
    'Hello Golden Trust, I have an enquiry from your website.',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Enquiry: ${service}`,
    message ? `Message: ${message}` : ''
  ].filter(Boolean).join('\n');

  status.textContent = 'Opening WhatsApp with your draft enquiry…';
  const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

// Floating WhatsApp button also uses the sample business number.
document.getElementById('whatsappFloat').addEventListener('click', (event) => {
  event.preventDefault();
  const businessWhatsAppNumber = '919876543210'; // Replace before publishing.
  window.open(`https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent('Hello Golden Trust, I would like to know more about your services.')}`, '_blank', 'noopener,noreferrer');
});
