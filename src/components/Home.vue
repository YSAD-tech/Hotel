<template>
  <div class="home-container">
    <!-- Banner -->
    <q-carousel
      v-model="slide"
      swipeable
      arrows
      infinite
      animated
      autoplay
      :autoplay-speed="3000"
      class="banner-carousel"
      control-color="white"
      height="400px" 
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        :img-src="image.src"
        :img-alt="image.alt"
        img-class="carousel-image"
      />
    </q-carousel>

    <!-- Historia del Hotel -->
    <div class="hotel-history">
      <div class="history-content">
        <img src="src/assets/Imagen de WhatsApp 2024-10-10 a las 02.08.01_833d06ad.jpg" alt="Hotel Marisol" class="history-image" />
        <div class="history-text">
          <h2>Nuestra Historia</h2>
          <p>
            El Hotel Marisol fue fundado en 1995 por la familia López, quienes soñaban con crear un refugio acogedor para los viajeros. Desde sus humildes comienzos, este hotel ha crecido para convertirse en un símbolo de hospitalidad en la región.
          </p>
          <p>
            La visión de la familia era ofrecer un lugar donde los huéspedes pudieran sentirse como en casa, disfrutando de un servicio excepcional y un entorno hermoso. Con el paso de los años, el Hotel Marisol ha evolucionado, incorporando modernas comodidades sin perder su esencia cálida y familiar.
          </p>
          <p>
            Hoy en día, el Hotel Marisol es conocido no solo por su confort y calidad, sino también por su compromiso con la sostenibilidad y el apoyo a la comunidad local. Cada año, miles de visitantes llegan para experimentar la magia del Hotel Marisol y crear recuerdos inolvidables.
          </p>
        </div>
      </div>
    </div>

    <!-- Carrusel de Servicios -->
    <div class="services">
      <h2>Nuestros Servicios</h2>
      <q-carousel
        class="services-carousel"
        arrows
        infinite
        height="200px"
        control-color="white"
      >
        <q-carousel-slide v-for="service in services" :key="service.label">
          <q-btn class="service-card" :to="service.link">
            <div class="service-info">
              <h3>{{ service.label }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </q-btn>
        </q-carousel-slide>
      </q-carousel>

      <h2>Actividades</h2>
      <q-carousel
        class="activities-carousel"
        arrows
        infinite
        height="200px"
        control-color="white"
      >
        <q-carousel-slide v-for="activity in activities" :key="activity.label">
          <q-btn class="activity-card" :to="activity.link">
            <div class="activity-info">
              <h3>{{ activity.label }}</h3>
              <p>{{ activity.description }}</p>
            </div>
          </q-btn>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slide = ref(0);
const images = ref([
  { src: 'src/assets/Imagen de WhatsApp 2024-10-10 a las 02.08.01_91e2b680.jpg', alt: 'Beautiful view of the hotel' },
  { src: 'src/assets/Imagen de WhatsApp 2024-10-10 a las 02.08.01_833d06ad.jpg', alt: 'Luxury room' },
  { src: 'src/assets/Imagen de WhatsApp 2024-10-10 a las 02.08.02_0cedf670.jpg', alt: 'Hotel pool at night' }
]);

const services = ref([
  { label: 'Spa', description: 'Relájate con nuestros tratamientos de spa de lujo.', link: '/spa' },
  { label: 'Restaurante', description: 'Disfruta de exquisiteces locales en nuestro restaurante.', link: '/restaurant' },
  { label: 'Gimnasio', description: 'Mantente en forma en nuestro gimnasio completamente equipado.', link: '/gym' },
]);

const activities = ref([
  { label: 'Tour de la ciudad', description: 'Explora la ciudad con nuestros guías expertos.', link: '/city-tour' },
  { label: 'Senderismo', description: 'Descubre la belleza natural de los alrededores en nuestras rutas de senderismo.', link: '/hiking' },
  { label: 'Clases de cocina', description: 'Aprende a preparar platos locales con nuestros chefs.', link: '/cooking-classes' },
]);
</script>

<style scoped>
.home-container {
  max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
  margin: 0 auto; /* Centra el contenedor */
}

.carousel-image {
  object-fit: cover; /* Ajusta la imagen para cubrir el área del carrusel */
  width: 100%; /* Hace que la imagen ocupe todo el ancho */
  height: 100%; /* Hace que la imagen ocupe toda la altura */
}

.hotel-history {
  padding: 20px;
  background-color: #000000;
  border-radius: 8px;
  margin: 20px 0;
}

.history-content {
  display: flex; /* Utiliza flexbox para alinear la imagen y el texto */
  align-items: center; /* Centra verticalmente */
}

.history-image {
  width: 50%; /* Ajusta el tamaño de la imagen */
  height: auto; /* Mantiene la proporción */
  border-radius: 8px; /* Añade bordes redondeados */
  margin-right: 20px; /* Espacio entre la imagen y el texto */
}

.history-text {
  flex: 1; /* Permite que el texto ocupe el espacio restante */
}

.services {
  padding: 20px;
}

.services-carousel,
.activities-carousel {
  margin: 20px 0;
}

.service-card,
.activity-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Hace que la tarjeta ocupe toda la altura */
  padding: 20px;
  border: 1px solid #ccc; /* Borde para la tarjeta */
  border-radius: 8px; /* Bordes redondeados */
  transition: transform 0.3s;
}

.service-card:hover,
.activity-card:hover {
  transform: scale(1.05); /* Efecto de escala al pasar el cursor */
}

.service-info,
.activity-info {
  text-align: center; /* Centra el texto dentro de la tarjeta */
}
</style>