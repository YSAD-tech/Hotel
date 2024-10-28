<template>
  <div class="services-container">
    <h1>Service</h1>
    
    <div class="services-list">
      <div v-for="(service, index) in services" :key="index" class="service-card">
        <img :src="service.image" alt="Imagen de {{ service.name }}" class="service-image" />
        <h3>{{ service.name }}</h3>
        <p>{{ service.shortDescription }}</p>
        <p class="service-detail">{{ service.detailDescription }}</p>
      </div>
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

// Lista de servicios
const services = ref([
  { 
    name: 'Spa', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIy-UU1AUxK1tczKd999BLDWBtf2fpx1rWXkYtXQ984ot1Th2NtS6hOdbkkEtRBMebMw&usqp=CAU', 
    shortDescription: 'Relax and rejuvenate.', 
    detailDescription: 'Enjoy a wide variety of spa treatments, including massages, facials and holistic therapies to relax and rejuvenate your body and mind.'
  },
  { 
    name: 'Restaurant', 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/15/da/15/terraza.jpg?w=600&h=-1&s=1', 
    shortDescription: 'Exquisite gastronomy.', 
    detailDescription: 'Delight in a unique culinary experience in our restaurant, where we offer a variety of dishes prepared by renowned chefs.'
  },
  { 
    name: 'Gym', 
    image: 'https://etenonfitness.com/wp-content/uploads/2023/04/Novotel-Shanghai-Clover-Star-Trac.jpg', 
    shortDescription: 'Stay fit.', 
    detailDescription: 'Our gym is equipped with state-of-the-art machines and offers guided classes to help you maintain your exercise routine while you´re traveling.'
  },
  { 
    name: 'Room Service', 
    image: 'https://hotelplazarevolucion.com/wp-content/uploads/2022/01/room-service.png', 
    shortDescription: 'Comfort in your room.', 
    detailDescription: 'Enjoy our room service, available 24 hours a day, so you can enjoy delicious dishes without leaving your room.'
  },
  { 
    name: 'Pool', 
    image: 'https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg', 
    shortDescription: 'Relax in the sun.', 
    detailDescription: 'Our outdoor pool is the perfect place to relax and enjoy a refreshing swim while you tan in the sun.'
  },
  { 
    name: 'Transport', 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/bc/5b/shuttle-bus-service-hotels.jpg?w=1200&h=-1&s=1', 
    shortDescription: 'Facilitate your mobility.', 
    detailDescription: 'We offer airport transportation services and excursions, ensuring that your travel experience is comfortable and hassle-free.'
  },
  { 
    name: 'Wi-Fi connection', 
    image: 'https://img.redestelecom.es/wp-content/uploads/2023/09/11120243/Hotel-WiFi-Adobe-Stock.jpg', 
    shortDescription: 'Connect anywhere.', 
    detailDescription: 'Enjoy free Wi-Fi in all areas of the hotel to stay connected with friends and family during your stay.'
  },
  { 
    name: 'Business center', 
    image: 'https://topadventure.com/img/2021/01/12/puebla_hoteles_negocios_business.jpg?__scale=c:transparent,w:480,h:270,t:3', 
    shortDescription: 'Ideal for business trips.', 
    detailDescription: 'Our business center is equipped with computers and printing services to meet your business needs during your stay.'
  }
]);
</script>

<style scoped>
.services-container {
  max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
  margin: 0 auto; /* Centra el contenedor */
  padding: 20px;
}

.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Disposición en cuadrícula */
  gap: 20px; /* Espacio entre tarjetas */
}

.service-card {
  padding: 15px;
  border-radius: 8px;
  background-color: #272020f4;
  box-shadow: 0 2px 4px rgba(66, 60, 60, 0.1);
  transition: transform 0.3s, box-shadow 0.3s; /* Transiciones para efectos hover */
}

.service-card:hover {
  transform: scale(1.05); /* Aumenta el tamaño ligeramente al pasar el cursor */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al hacer hover */
}
.services-container h1, h3{
  margin-top: -2px;
  color: rgba(239, 196, 104, 0.907);
}

p{
  font-size: large;
  color: #cfa26c;
}

.service-card h3 {
  margin-top: -2px;
  margin-bottom: 10px;
}
.service-image {
  width: 100%; /* Asegura que la imagen ocupe todo el ancho de la tarjeta */
  height: 62%; /* Mantiene la proporción de la imagen */
  border-radius: 8px 8px 0 0; /* Esquinas redondeadas en la parte superior */
}

.service-detail {
  font-size: 0.9em; /* Tamaño de fuente para las descripciones detalladas */
  color: #949494; /* Color del texto de descripción detallada */
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
