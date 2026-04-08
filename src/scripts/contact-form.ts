// WhatsApp Form Handler
const whatsappForm = document.getElementById('contact-form');

if (whatsappForm) {
  const whatsappNumber = (document.getElementById('whatsapp-number') as HTMLInputElement)?.value || '';
  whatsappForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = (document.getElementById('firstName') as HTMLInputElement)?.value?.trim() || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value?.trim() || '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value?.trim() || '';
    const service = (document.getElementById('service') as HTMLInputElement)?.value || '';
    const message = (document.getElementById('message') as HTMLInputElement)?.value?.trim() || '';
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