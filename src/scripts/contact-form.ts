// WhatsApp Form Handler
const whatsappForm = document.getElementById('contact-form');

if (whatsappForm) {
  const whatsappNumber = document.getElementById('whatsapp-number')?.value || '';
  whatsappForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('firstName')?.value?.trim() || '';
    const email = document.getElementById('email')?.value?.trim() || '';
    const phone = document.getElementById('phone')?.value?.trim() || '';
    const service = document.getElementById('service')?.value || '';
    const message = document.getElementById('message')?.value?.trim() || '';
    const cleanNumber = whatsappNumber.replace(/\D/g, '');

    const parts = [
      fullName ? `Hola Dharma, mi nombre es ${fullName}.` : 'Hola Dharma, me gustaría agendar una consulta.',
      service ? `Quisiera agendar una consulta para: ${service}.` : '',
      email ? `Mi correo es: ${email}.` : '',
      phone ? `Mi teléfono/WhatsApp es: ${phone}.` : '',
      message ? `Mensaje: ${message}` : ''
    ].filter(Boolean);

    const text = encodeURIComponent(parts.join(' '));
    const url = `https://wa.me/${cleanNumber}?text=${text}`;

    window.open(url, '_blank');
  });
}