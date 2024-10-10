<template>
    <div class="services-container">
      <h1>Servicios del Hotel</h1>
      
      <div class="services-list">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <img :src="service.image" alt="Imagen de {{ service.name }}" class="service-image" />
          <h3>{{ service.name }}</h3>
          <p>{{ service.shortDescription }}</p>
          <p class="service-detail">{{ service.detailDescription }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Lista de servicios
  const services = ref([
    { 
      name: 'Spa', 
      image: 'src/assets/spa.jpg', 
      shortDescription: 'Relájate y rejuvenece.', 
      detailDescription: 'Disfruta de una amplia variedad de tratamientos de spa, incluyendo masajes, faciales y terapias holísticas para relajarte y rejuvenecer tu cuerpo y mente.'
    },
    { 
      name: 'Restaurante', 
      image: 'src/assets/restaurant.jpg', 
      shortDescription: 'Gastronomía exquisita.', 
      detailDescription: 'Deléitate con una experiencia culinaria única en nuestro restaurante, donde ofrecemos una variedad de platillos preparados por chefs de renombre.'
    },
    { 
      name: 'Gimnasio', 
      image: 'src/assets/gym.jpg', 
      shortDescription: 'Mantente en forma.', 
      detailDescription: 'Nuestro gimnasio está equipado con máquinas de última generación y ofrece clases dirigidas para ayudarte a mantener tu rutina de ejercicios mientras estás de viaje.'
    },
    { 
      name: 'Servicio a la Habitación', 
      image: 'src/assets/room_service.jpg', 
      shortDescription: 'Comodidad en tu habitación.', 
      detailDescription: 'Disfruta de nuestro servicio a la habitación, disponible las 24 horas, para que puedas degustar deliciosos platillos sin salir de tu habitación.'
    },
    { 
      name: 'Piscina', 
      image: 'src/assets/pool.jpg', 
      shortDescription: 'Relájate bajo el sol.', 
      detailDescription: 'Nuestra piscina al aire libre es el lugar perfecto para relajarte y disfrutar de un refrescante baño mientras te bronceas al sol.'
    },
    { 
      name: 'Transporte', 
      image: 'src/assets/transport.jpg', 
      shortDescription: 'Facilita tu movilidad.', 
      detailDescription: 'Ofrecemos servicios de transporte al aeropuerto y excursiones, asegurando que tu experiencia de viaje sea cómoda y sin complicaciones.'
    },
    { 
      name: 'Conexión Wi-Fi', 
      image: 'src/assets/wifi.jpg', 
      shortDescription: 'Conéctate en cualquier lugar.', 
      detailDescription: 'Disfruta de conexión Wi-Fi gratuita en todas las áreas del hotel para mantenerte conectado con amigos y familiares durante tu estancia.'
    },
    { 
      name: 'Centro de Negocios', 
      image: 'src/assets/business_center.jpg', 
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
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s; /* Transiciones para efectos hover */
  }
  
  .service-card:hover {
    transform: scale(1.05); /* Aumenta el tamaño ligeramente al pasar el cursor */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al hacer hover */
  }
  
  .service-image {
    width: 100%; /* Asegura que la imagen ocupe todo el ancho de la tarjeta */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 8px 8px 0 0; /* Esquinas redondeadas en la parte superior */
  }
  
  .service-detail {
    font-size: 0.9em; /* Tamaño de fuente para las descripciones detalladas */
    color: #555; /* Color del texto de descripción detallada */
  }
  </style>  