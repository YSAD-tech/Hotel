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
    shortDescription: 'Relájate y rejuvenece.', 
    detailDescription: 'Disfruta de una amplia variedad de tratamientos de spa, incluyendo masajes, faciales y terapias holísticas para relajarte y rejuvenecer tu cuerpo y mente.'
  },
  { 
    name: 'Restaurante', 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/15/da/15/terraza.jpg?w=600&h=-1&s=1', 
    shortDescription: 'Gastronomía exquisita.', 
    detailDescription: 'Deléitate con una experiencia culinaria única en nuestro restaurante, donde ofrecemos una variedad de platillos preparados por chefs de renombre.'
  },
  { 
    name: 'Gimnasio', 
    image: 'https://etenonfitness.com/wp-content/uploads/2023/04/Novotel-Shanghai-Clover-Star-Trac.jpg', 
    shortDescription: 'Mantente en forma.', 
    detailDescription: 'Nuestro gimnasio está equipado con máquinas de última generación y ofrece clases dirigidas para ayudarte a mantener tu rutina de ejercicios mientras estás de viaje.'
  },
  { 
    name: 'Servicio a la Habitación', 
    image: 'https://hotelplazarevolucion.com/wp-content/uploads/2022/01/room-service.png', 
    shortDescription: 'Comodidad en tu habitación.', 
    detailDescription: 'Disfruta de nuestro servicio a la habitación, disponible las 24 horas, para que puedas degustar deliciosos platillos sin salir de tu habitación.'
  },
  { 
    name: 'Piscina', 
    image: 'https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg', 
    shortDescription: 'Relájate bajo el sol.', 
    detailDescription: 'Nuestra piscina al aire libre es el lugar perfecto para relajarte y disfrutar de un refrescante baño mientras te bronceas al sol.'
  },
  { 
    name: 'Transporte', 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/bc/5b/shuttle-bus-service-hotels.jpg?w=1200&h=-1&s=1', 
    shortDescription: 'Facilita tu movilidad.', 
    detailDescription: 'Ofrecemos servicios de transporte al aeropuerto y excursiones, asegurando que tu experiencia de viaje sea cómoda y sin complicaciones.'
  },
  { 
    name: 'Conexión Wi-Fi', 
    image: 'https://img.redestelecom.es/wp-content/uploads/2023/09/11120243/Hotel-WiFi-Adobe-Stock.jpg', 
    shortDescription: 'Conéctate en cualquier lugar.', 
    detailDescription: 'Disfruta de conexión Wi-Fi gratuita en todas las áreas del hotel para mantenerte conectado con amigos y familiares durante tu estancia.'
  },
  { 
    name: 'Centro de Negocios', 
    image: 'https://topadventure.com/img/2021/01/12/puebla_hoteles_negocios_business.jpg?__scale=c:transparent,w:480,h:270,t:3', 
    shortDescription: 'Ideal para viajes de negocios.', 
    detailDescription: 'Nuestro centro de negocios está equipado con computadoras y servicios de impresión para satisfacer tus necesidades laborales durante tu estancia.'
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
.services-container h1, h3, p{
  margin-top: -2px;
  color: rgb(185, 154, 115);
}


.service-card h3 {
  margin-top: -2px;
  margin-bottom: 10px;
}
.service-image {
  width: 100%; /* Asegura que la imagen ocupe todo el ancho de la tarjeta */
  height: auto; /* Mantiene la proporción de la imagen */
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
