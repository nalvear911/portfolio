document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto

    // Aquí puedes agregar lógica para enviar el formulario, si es necesario

    alert('¡Mensaje enviado con éxito!'); // Mensaje de confirmación
    this.reset(); // Reinicia el formulario
});
