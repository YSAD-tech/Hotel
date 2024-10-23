<template>
    <div class="rooms-container">
      <h1>Our Rooms</h1>
  
      <!-- Categoría: Habitaciones Standard -->
      <h2>Standard Rooms</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in standardRooms" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p class="des">{{ room.shortDescription }}</p>
          <p class="room-prices">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
        </div>
      </div>
  
      <!-- Categoría: Habitaciones Deluxe -->
      <h2>Deluxe Rooms</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in deluxeRooms" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p class="des">{{ room.shortDescription }}</p>
          <p class="room-prices">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
        </div>
      </div>
  
      <!-- Categoría: Suites -->
      <h2>Suites</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in suites" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p class="des">{{ room.shortDescription }}</p>
          <p class="room-prices">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
        </div>
      </div>
  
      <!-- Categoría: Habitaciones Premium -->
      <h2>Premium Rooms</h2>
      <div class="rooms-list">
        <div v-for="(room, index) in premiumRooms" :key="index" class="room-card">
          <img :src="room.image" alt="Imagen de {{ room.name }}" class="room-image" />
          <h3>{{ room.name }}</h3>
          <p class="des">{{ room.shortDescription }}</p>
          <p class="room-prices">${{ room.price.toFixed(2) }}</p>
          <p class="room-detail">{{ room.detailDescription }}</p>
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
  
  // Habitaciones Standard
  const standardRooms = ref([
    { 
      name: 'Habitación Standard', 
      image: 'https://media.portaventuraworld.com/mediaManager/image/a23d25a48ddf8d0675ed570176a33e0f21dcae0c9bc0a1e0a95ddb72c6edf4aa.jpg?tx=ar_0.91,c_crop/w_465,h_510,c_fit', 
      shortDescription: 'Acogedora habitación con cama queen.', 
      price: 150,
      detailDescription: 'Esta habitación estándar cuenta con una cama queen, un baño privado completamente equipado y todas las comodidades necesarias para una estancia agradable. Ideal para viajeros individuales o parejas que buscan comodidad y tranquilidad.'
    },
    { 
      name: 'Habitación Standard con Vista', 
      image: 'https://www.hotelcasablancasanandres.com/assets/cache/uploads/rooms/hotel-casablanca-sanandres/habitacion-superior-vista-al-mar/1145x535/1-1-3-3.jpg', 
      shortDescription: 'Con vistas al jardín.', 
      price: 170,
      detailDescription: 'Disfruta de una estancia placentera en esta habitación estándar con vistas al jardín. Equipado con una cama queen, esta habitación es perfecta para relajarse después de un día explorando la ciudad.'
    },
    { 
      name: 'Habitación Doble Standard', 
      image: 'https://image-tc.galaxy.tf/wijpeg-6iq9rljn5s40j8r6osuxtmvc7/doble-14_wide.jpg?crop=0%2C101%2C1920%2C1080', 
      shortDescription: 'Habitación con dos camas individuales.', 
      price: 160,
      detailDescription: 'Ideal para amigos o colegas, esta habitación cuenta con dos camas individuales, un baño privado y un ambiente acogedor para garantizar una estancia cómoda.'
    }
  ]);
  
  // Habitaciones Deluxe
  const deluxeRooms = ref([
    { 
      name: 'Habitación Deluxe', 
      image: 'https://preciadoshotel.com/wp-content/uploads/2019/12/O2A8483.jpg', 
      shortDescription: 'Amplia habitación con balcón y vistas al mar.', 
      price: 220,
      detailDescription: 'Esta lujosa habitación deluxe ofrece una cama king size, un balcón privado con vistas al mar y una decoración elegante. Perfecta para aquellos que buscan una experiencia de lujo durante su estancia.'
    },
    { 
      name: 'Habitación Deluxe Familiar', 
      image: 'https://images.mirai.com/INFOROOMS/56998470/KiG9REkxX7FKc7SlnhDK/KiG9REkxX7FKc7SlnhDK_large.jpg', 
      shortDescription: 'Ideal para familias.', 
      price: 250,
      detailDescription: 'Esta habitación espaciosa está diseñada para familias, con capacidad para cuatro personas. Cuenta con una cama king size y un sofá cama, además de un baño moderno y todas las comodidades necesarias.'
    },
    { 
      name: 'Habitación Deluxe con Jacuzzi', 
      image: 'https://www.hotelesconencanto.club/wp-content/uploads/2023/01/valencia-hotel-con-jacuzzi-habitacion-luve.webp', 
      shortDescription: 'Con jacuzzi privado.', 
      price: 300,
      detailDescription: 'Relájate en el jacuzzi privado de esta habitación deluxe. Con una decoración exquisita y una cama king size, esta habitación es el refugio perfecto para una escapada romántica.'
    }
  ]);
  
  // Suites
  const suites = ref([
    { 
      name: 'Suite Junior', 
      image: 'data:image/jpeg;base64,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', 
      shortDescription: 'Con sala de estar y vistas panorámicas.', 
      price: 350,
      detailDescription: 'Esta suite junior cuenta con una espaciosa sala de estar y vistas panorámicas. Ideal para aquellos que buscan un poco más de espacio y comodidad, perfecta para viajes de negocios o escapadas de fin de semana.'
    },
    { 
      name: 'Suite Ejecutiva', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFsD3Kpm8NuHEPcef6NipI13_xMqeDOSF7w&s', 
      shortDescription: 'Ideal para viajes de negocios.', 
      price: 400,
      detailDescription: 'La suite ejecutiva está diseñada pensando en el viajero de negocios, con una oficina privada, acceso a Internet de alta velocidad y todas las comodidades para garantizar una estancia productiva y placentera.'
    },
    { 
      name: 'Suite Presidencial', 
      image: 'https://hotelxtoronto.com/_novaimg/4326201-1346093_442_344_3540_1931_2200_1200.rc.jpg', 
      shortDescription: 'Servicios exclusivos y lujo total.', 
      price: 600,
      detailDescription: 'Esta lujosa suite presidencial ofrece todo lo que necesitas para una experiencia de primera clase, con varias habitaciones, una amplia sala de estar y un servicio exclusivo para satisfacer todas tus necesidades.'
    }
  ]);
  
  // Habitaciones Premium
  const premiumRooms = ref([
    { 
      name: 'Habitación Premium con Vista al Mar', 
      image: 'https://img.freepik.com/fotos-premium/habitacion-hotel-lujo-vista-al-mar_865967-258282.jpg', 
      shortDescription: 'Terraza privada y vistas al océano.', 
      price: 450,
      detailDescription: 'Disfruta de impresionantes vistas al océano desde tu terraza privada en esta habitación premium. Equipado con una cama king size y un lujoso baño, es el lugar perfecto para una escapada de ensueño.'
    },
    { 
      name: 'Habitación Premium con Piscina', 
      image: 'https://img.100r.systems/img/b3fb25f5708165ecfcf7563368513cf9.jpg', 
      shortDescription: 'Acceso directo a la piscina privada.', 
      price: 500,
      detailDescription: 'Esta habitación premium cuenta con acceso directo a una piscina privada, perfecta para relajarse y disfrutar del sol. Decorada con un estilo contemporáneo y elegante, es ideal para una experiencia lujosa.'
    },
    { 
      name: 'Habitación Premium Adaptada', 
      image: 'https://www.hotelmontecarlo.net/media/rooms/1110x/7-habitacion-premium-sjt-20230201095813.jpg', 
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
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    background-color: #272020f4;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s; /* Transiciones para efectos hover */
  }
  
  .room-card:hover {
    transform: scale(1.05); /* Aumenta el tamaño ligeramente al pasar el cursor */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al hacer hover */
  }

  .rooms-container h1, h2 ,h3{
  margin-top: -2px;
  color: rgb(185, 154, 115);
  }

  .des{
    font-size: 17px;
    margin-top: -35px;
    color: rgb(185, 154, 115);
  }

  h1{
    margin-bottom: 15px;
  }

  .room-image {
    width: 100%; /* Asegura que la imagen ocupe todo el ancho de la tarjeta */
    height: 200px; /* Mantiene la proporción de la imagen */
    border-radius: 8px 8px 0 0; /* Esquinas redondeadas en la parte superior */
  }
  
  .room-prices {
    font-weight: bold;
    color: #0080ff; /* Color para el precio */
  }
  
  .room-detail {
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
