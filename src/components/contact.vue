<template>
    <div class="contact-container">
      <h1>Contact</h1>
  
      <div class="contact-form">
    <h2>Contact Form</h2>
    <q-form @submit.prevent="submitForm">
      <q-input 
        v-model="name" 
        label="Name"
        required 
        label-color="green" 
        input-style="color: white"
      />
      <q-input 
        v-model="email" 
        label="Email" 
        type="email" 
        required 
        label-color="green" 
        input-style="color: white"
      />
      <q-input 
        v-model="message" 
        label="Message" 
        type="textarea" 
        required 
        label-color="green"
        input-style="color: white"
      />
      <q-btn label="Send" type="submit" class="input" color="orange" />
    </q-form>
  </div>
  
      <div class="map-container">
        <h2>Our Location</h2>
        <iframe
          width="100%"
          height="400"
          :src="mapSrc"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <footer>

<div class="iconos">
    <q-btn :style="{ backgroundColor: '#d4c19c' }" icon="fab fa-facebook" aria-label="Facebook"></q-btn>
    <q-btn :style="{ backgroundColor: '#d4c19c' }" icon="fab fa-instagram"></q-btn>
    <q-btn :style="{ backgroundColor: '#d4c19c' }" icon="fab fa-twitter"></q-btn>
    <q-btn :style="{ backgroundColor: '#d4c19c' }" icon="fab fa-youtube"></q-btn>
    <q-btn :style="{ backgroundColor: '#d4c19c' }" icon="fab fa-whatsapp"></q-btn>
</div>


</footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Notify } from 'quasar';
  
  // Datos del formulario
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  // Función para manejar el envío del formulario
  const submitForm = () => {
  Notify.create({
    message: 'Formulario enviado correctamente',
    icon: 'check',
    position: 'top',
    timeout: 2000,
    style: { backgroundColor: '#272020f4',
    color: 'orange' },
  });

  // Limpiar los campos del formulario después de enviar
  name.value = '';
  email.value = '';
  message.value = '';
};

  // URL del mapa (coordenadas del hotel Marisol)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.053737166252!2d-122.41941508468173!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8a0e9c05%3A0x4ae675ee8f7e36c3!2sMarisol%20Hotel!5e0!3m2!1ses!2sus!4v1630221019405!5m2!1ses!2sus";
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
    margin: 0 auto; /* Centra el contenedor */
    padding: 20px;
    color: rgba(239, 196, 104, 0.907);
  }
  
  .contact-form {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #161414;
    border-radius: 8px;
    background-color: #272020f4;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .contact-form h2{
    margin-top: 2px;
    margin-bottom: 10px;
  }

  .input {
    color: rgb(185, 154, 115);
    background-color: chocolate;
  }

  q-input {
    font-size: 30px;
  }

  .map-container {
    margin-top: 20px;
    border-radius: 200px;
  }
  
  iframe {
    border: 0; /* Elimina el borde del iframe */
  }
  
footer {
  background-color: #333; /* Fondo oscuro */
  color: white; /* Texto claro */
  padding: 20px 0; /* Espaciado */
  text-align: center; /* Centra el contenido */
}

footer .iconos {
  display: flex;
  justify-content: center; /* Centra horizontalmente los íconos */
  gap: 15px; /* Espacio entre los botones */
}

footer .q-btn {
  width: 50px; /* Tamaño del botón */
  height: 50px; /* Tamaño del botón */
  border-radius: 50%; /* Botones redondeados */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4c19c; /* Color de fondo personalizado */
  color: white; /* Color del ícono */
  transition: background-color 0.3s ease;
}

footer .q-btn:hover {
  background-color: #b39c7c; /* Cambio de color en hover */
}

footer .q-btn i {
  font-size: 24px; /* Tamaño del ícono */
}

</style>