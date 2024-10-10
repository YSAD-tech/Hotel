<template>
    <div class="rooms-container">
      <h1>Nuestras Habitaciones</h1>
  
      <!-- Categoría: Habitaciones Standard -->
      <h2>Habitaciones Standard</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in standardRooms" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p>{{ room.shortDescription }}</p>
          <p class="room-price">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
        </div>
      </div>
  
      <!-- Categoría: Habitaciones Deluxe -->
      <h2>Habitaciones Deluxe</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in deluxeRooms" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p>{{ room.shortDescription }}</p>
          <p class="room-price">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
        </div>
      </div>
  
      <!-- Categoría: Suites -->
      <h2>Suites</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in suites" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p>{{ room.shortDescription }}</p>
          <p class="room-price">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
        </div>
      </div>
  
      <!-- Categoría: Habitaciones Premium -->
      <h2>Habitaciones Premium</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in premiumRooms" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p>{{ room.shortDescription }}</p>
          <p class="room-price">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Habitaciones Standard
  const standardRooms = ref([
    { 
      name: 'Habitación Standard', 
      image: 'src/assets/standard_room.jpg', 
      shortDescription: 'Acogedora habitación con cama queen.', 
      price: 150,
      detailDescription: 'Esta habitación estándar cuenta con una cama queen, un baño privado completamente equipado y todas las comodidades necesarias para una estancia agradable. Ideal para viajeros individuales o parejas que buscan comodidad y tranquilidad.'
    },
    { 
      name: 'Habitación Standard con Vista', 
      image: 'src/assets/standard_room_view.jpg', 
      shortDescription: 'Con vistas al jardín.', 
      price: 170,
      detailDescription: 'Disfruta de una estancia placentera en esta habitación estándar con vistas al jardín. Equipado con una cama queen, esta habitación es perfecta para relajarse después de un día explorando la ciudad.'
    },
    { 
      name: 'Habitación Doble Standard', 
      image: 'src/assets/double_standard_room.jpg', 
      shortDescription: 'Habitación con dos camas individuales.', 
      price: 160,
      detailDescription: 'Ideal para amigos o colegas, esta habitación cuenta con dos camas individuales, un baño privado y un ambiente acogedor para garantizar una estancia cómoda.'
    }
  ]);
  
  // Habitaciones Deluxe
  const deluxeRooms = ref([
    { 
      name: 'Habitación Deluxe', 
      image: 'src/assets/deluxe_room.jpg', 
      shortDescription: 'Amplia habitación con balcón y vistas al mar.', 
      price: 220,
      detailDescription: 'Esta lujosa habitación deluxe ofrece una cama king size, un balcón privado con vistas al mar y una decoración elegante. Perfecta para aquellos que buscan una experiencia de lujo durante su estancia.'
    },
    { 
      name: 'Habitación Deluxe Familiar', 
      image: 'src/assets/deluxe_family_room.jpg', 
      shortDescription: 'Ideal para familias.', 
      price: 250,
      detailDescription: 'Esta habitación espaciosa está diseñada para familias, con capacidad para cuatro personas. Cuenta con una cama king size y un sofá cama, además de un baño moderno y todas las comodidades necesarias.'
    },
    { 
      name: 'Habitación Deluxe con Jacuzzi', 
      image: 'src/assets/deluxe_jacuzzi_room.jpg', 
      shortDescription: 'Con jacuzzi privado.', 
      price: 300,
      detailDescription: 'Relájate en el jacuzzi privado de esta habitación deluxe. Con una decoración exquisita y una cama king size, esta habitación es el refugio perfecto para una escapada romántica.'
    }
  ]);
  
  // Suites
  const suites = ref([
    { 
      name: 'Suite Junior', 
      image: 'src/assets/junior_suite.jpg', 
      shortDescription: 'Con sala de estar y vistas panorámicas.', 
      price: 350,
      detailDescription: 'Esta suite junior cuenta con una espaciosa sala de estar y vistas panorámicas. Ideal para aquellos que buscan un poco más de espacio y comodidad, perfecta para viajes de negocios o escapadas de fin de semana.'
    },
    { 
      name: 'Suite Ejecutiva', 
      image: 'src/assets/executive_suite.jpg', 
      shortDescription: 'Ideal para viajes de negocios.', 
      price: 400,
      detailDescription: 'La suite ejecutiva está diseñada pensando en el viajero de negocios, con una oficina privada, acceso a Internet de alta velocidad y todas las comodidades para garantizar una estancia productiva y placentera.'
    },
    { 
      name: 'Suite Presidencial', 
      image: 'src/assets/presidential_suite.jpg', 
      shortDescription: 'Servicios exclusivos y lujo total.', 
      price: 600,
      detailDescription: 'Esta lujosa suite presidencial ofrece todo lo que necesitas para una experiencia de primera clase, con varias habitaciones, una amplia sala de estar y un servicio exclusivo para satisfacer todas tus necesidades.'
    }
  ]);
  
  // Habitaciones Premium
  const premiumRooms = ref([
    { 
      name: 'Habitación Premium con Vista al Mar', 
      image: 'src/assets/premium_sea_view.jpg', 
      shortDescription: 'Terraza privada y vistas al océano.', 
      price: 450,
      detailDescription: 'Disfruta de impresionantes vistas al océano desde tu terraza privada en esta habitación premium. Equipado con una cama king size y un lujoso baño, es el lugar perfecto para una escapada de ensueño.'
    },
    { 
      name: 'Habitación Premium con Piscina', 
      image: 'src/assets/premium_pool.jpg', 
      shortDescription: 'Acceso directo a la piscina privada.', 
      price: 500,
      detailDescription: 'Esta habitación premium cuenta con acceso directo a una piscina privada, perfecta para relajarse y disfrutar del sol. Decorada con un estilo contemporáneo y elegante, es ideal para una experiencia lujosa.'
    },
    { 
      name: 'Habitación Premium Adaptada', 
      image: 'src/assets/premium_adapted.jpg', 
      shortDescription: 'Adaptada para personas con movilidad reducida.', 
      price: 430,
      detailDescription: 'Esta habitación premium está completamente adaptada para personas con movilidad reducida, asegurando una estancia cómoda y accesible. Ofrece todas las comodidades de lujo en un entorno acogedor.'
    }
  ]);
  </script>
  
  <style scoped>
  .rooms-container {
    max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
    margin: 0 auto; /* Centra el contenedor */
    padding: 20px;
  }
  
  .rooms-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Disposición en cuadrícula */
    gap: 20px; /* Espacio entre tarjetas */
  }
  
  .room-card {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s; /* Transiciones para efectos hover */
  }
  
  .room-card:hover {
    transform: scale(1.05); /* Aumenta el tamaño ligeramente al pasar el cursor */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al hacer hover */
  }
  
  .room-image {
    width: 100%; /* Asegura que la imagen ocupe todo el ancho de la tarjeta */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 8px 8px 0 0; /* Esquinas redondeadas en la parte superior */
  }
  
  .room-price {
    font-weight: bold;
    color: #2c3e50; /* Color para el precio */
  }
  
  .room-detail {
    font-size: 0.9em; /* Tamaño de fuente para las descripciones detalladas */
    color: #555; /* Color del texto de descripción detallada */
  }
  </style>  