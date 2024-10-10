<template>
    <div class="activities-container">
      <h1>Actividades y Deportes Extremos</h1>
  
      <!-- Actividades -->
      <h2>Actividades Disponibles</h2>
      <div class="activities-list">
        <div v-for="(activity, index) in activities" :key="index" class="activity-card">
          <img :src="activity.image" alt="Imagen de {{ activity.name }}" class="activity-image" />
          <h3>{{ activity.name }}</h3>
          <p>{{ activity.shortDescription }}</p>
          <p class="activity-detail">{{ activity.detailDescription }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Lista de actividades
  const activities = ref([
    { 
      name: 'Senderismo', 
      image: 'src/assets/Imagen de WhatsApp 2024-10-10 a las 02.08.01_91e2b680.jpg', 
      shortDescription: 'Explora los senderos naturales.', 
      detailDescription: 'Embárcate en una aventura de senderismo a través de impresionantes paisajes naturales. Nuestros guías experimentados te llevarán a los mejores senderos, adecuados para todos los niveles de habilidad.'
    },
    { 
      name: 'Bungee Jumping', 
      image: 'src/assets/Imagen de WhatsApp 2024-10-10 a las 02.08.01_91e2b680.jpg', 
      shortDescription: 'Un salto lleno de adrenalina.', 
      detailDescription: 'Siente la adrenalina en tu sangre mientras saltas desde una plataforma elevada. Nuestro equipo profesional te proporcionará todo el equipo necesario para garantizar tu seguridad.'
    },
    { 
      name: 'Escalada en Roca', 
      image: 'src/assets/rock_climbing.jpg', 
      shortDescription: 'Desafía tus límites.', 
      detailDescription: 'Experimenta la emoción de la escalada en roca en un entorno seguro. Desde principiantes hasta escaladores avanzados, tenemos rutas adecuadas para todos los niveles.'
    },
    { 
      name: 'Surf', 
      image: 'src/assets/surfing.jpg', 
      shortDescription: 'Disfruta de las olas.', 
      detailDescription: 'Únete a nuestras clases de surf y aprende a montar las olas con la ayuda de instructores experimentados. Ya seas principiante o experto, ¡te garantizamos una experiencia divertida!'
    },
    { 
      name: 'Paseo en Bicicleta de Montaña', 
      image: 'src/assets/mountain_biking.jpg', 
      shortDescription: 'Recorre los senderos en bicicleta.', 
      detailDescription: 'Explora los hermosos senderos en bicicleta de montaña. Alquila una bicicleta y disfruta de un recorrido guiado a través de la naturaleza y paisajes impresionantes.'
    },
    { 
      name: 'Kayak en Aguas Bravas', 
      image: 'src/assets/whitewater_kayaking.jpg', 
      shortDescription: 'Aventura en el agua.', 
      detailDescription: 'Siente la emoción de navegar por ríos de aguas bravas. Nuestros guías expertos te acompañarán en esta emocionante actividad acuática, asegurando tu seguridad en todo momento.'
    },
    { 
      name: 'Paracaidismo', 
      image: 'src/assets/skydiving.jpg', 
      shortDescription: 'Vive la experiencia del salto en caída libre.', 
      detailDescription: 'Disfruta de la vista panorámica mientras te lanzas al vacío en un salto en paracaídas. Un instructor profesional te acompañará en esta experiencia inolvidable.'
    },
    { 
      name: 'Snorkel', 
      image: 'src/assets/snorkeling.jpg', 
      shortDescription: 'Descubre el mundo submarino.', 
      detailDescription: 'Sumérgete en las aguas cristalinas y explora la vida marina con nuestro equipo de snorkel. Ideal para todas las edades y niveles de experiencia.'
    }
  ]);
  </script>
  
  <style scoped>
  .activities-container {
    max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
    margin: 0 auto; /* Centra el contenedor */
    padding: 20px;
  }
  
  .activities-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Disposición en cuadrícula */
    gap: 20px; /* Espacio entre tarjetas */
  }
  
  .activity-card {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s; /* Transiciones para efectos hover */
  }
  
  .activity-card:hover {
    transform: scale(1.05); /* Aumenta el tamaño ligeramente al pasar el cursor */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al hacer hover */
  }
  
  .activity-image {
    width: 100%; /* Asegura que la imagen ocupe todo el ancho de la tarjeta */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 8px 8px 0 0; /* Esquinas redondeadas en la parte superior */
  }
  
  .activity-detail {
    font-size: 0.9em; /* Tamaño de fuente para las descripciones detalladas */
    color: #555; /* Color del texto de descripción detallada */
  }
  </style>
  