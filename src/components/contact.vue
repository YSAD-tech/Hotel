<template>
    <div class="contact-container">
      <h1>Contacto</h1>
  
      <div class="contact-form">
        <h2>Formulario de Contacto</h2>
        <q-form @submit.prevent="submitForm">
          <q-input v-model="name" label="Nombre" required/>
          <q-input v-model="email" label="Correo Electrónico" type="email" required />
          <q-input v-model="message" label="Mensaje" type="textarea" required />
          <q-btn label="Enviar" type="submit" color="primary" />
        </q-form>
      </div>
  
      <div class="map-container">
        <h2>Nuestra Ubicación</h2>
        <iframe
          width="100%"
          height="400"
          :src="mapSrc"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Datos del formulario
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  // Función para manejar el envío del formulario
  const submitForm = () => {
    alert(`Nombre: ${name.value}\nCorreo: ${email.value}\nMensaje: ${message.value}`);
    // Aquí puedes agregar la lógica para enviar el formulario, como una llamada a una API
  };
  
  // URL del mapa (coordenadas del hotel Marisol)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.053737166252!2d-122.41941508468173!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8a0e9c05%3A0x4ae675ee8f7e36c3!2sMarisol%20Hotel!5e0!3m2!1ses!2sus!4v1630221019405!5m2!1ses!2sus";
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
    margin: 0 auto; /* Centra el contenedor */
    padding: 20px;
  }
  
  .contact-form {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #161414;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .contact-form h2 {
    margin-top: 2px;
    color: #161414;
    margin-bottom: 10px;
  }
  
  .map-container {
    margin-top: 20px;
  }
  
  iframe {
    border: 0; /* Elimina el borde del iframe */
  }
  </style>  
