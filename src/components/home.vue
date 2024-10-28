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
  :autoplay-speed="1000"  
  transition-prev="slide-right"
  transition-next="slide-left"
  class="banner-carousel"
  control-color="orange"
  height="550px"
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
        <img src="https://storage.googleapis.com/a1aa/image/IgnVtW8KpPZ1I9BYrcMhl00aXQQArePGkG8WJHEuTUU0w00JA.jpg" alt="Hotel Marisol" class="history-image" />
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
      <div class="carousel-wrapper">
        <h2>Services</h2>
      <q-carousel
        v-model="serviceSlide"
        swipeable
        arrows
        infinite
        animated
        autoplay
        :autoplay-speed="2000"
        transition-prev="slide-right"
        transition-next="slide-left"
        class="services-carousel"
        control-color="white"
        height="200px"
      >
        <q-carousel-slide
          v-for="(service, index) in services"
          :key="index"
          :name="index"
          :img-src="service.image"
          :img-alt="service.name"
          img-class="carousel-image"
        ><div class="carousel-text">{{ service.name}}</div>
      </q-carousel-slide>
      </q-carousel>

      <!-- Botón de Ver más para Servicios -->
      <div class="btn-ver-mas">
        <q-btn to="/services">Ver más...</q-btn>
      </div>
      </div>
      <div class="carousel-wrapper">
        <h2>Activities</h2>
      <q-carousel
        v-model="activitySlide"
        swipeable
        arrows
        infinite
        animated
        autoplay
        :autoplay-speed="2000"
        transition-prev="slide-right"
        transition-next="slide-left"
        class="activities-carousel"
        control-color="white"
        height="200px"
      >
        <q-carousel-slide
          v-for="(activity, index) in activities"
          :key="index"
          :name="index"
          :img-src="activity.image"
          :img-alt="activity.label"
          img-class="carousel-image"
        ><div class="carousel-text">{{ activity.label }}</div>
      </q-carousel-slide>
      </q-carousel>

      <!-- Botón de Ver más para Actividades -->
      <div class="btn-ver-mas">
        <q-btn to="/activities">Ver más...</q-btn>
      </div>
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

const slide = ref(0);
const serviceSlide = ref(0);
const activitySlide = ref(0);
const images = ref([  
  { src: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501672-spain.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh', alt: 'Hotel pool at night' },
  { src: 'https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65046bf150d1abb7e5911702_x-65046bcfdc4f0.webp', alt: 'Luxury room' },
  { src: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBkZSUyMGx1am98ZW58MHx8MHx8fDA%3D', alt: 'Hotel pool at night' },
]);

const services = ref([
  { name: 'Spa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIy-UU1AUxK1tczKd999BLDWBtf2fpx1rWXkYtXQ984ot1Th2NtS6hOdbkkEtRBMebMw&usqp=CAU' },
  { name: 'Restaurante', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/15/da/15/terraza.jpg?w=600&h=-1&s=1' },
  { name: 'Gimnasio', image: 'https://etenonfitness.com/wp-content/uploads/2023/04/Novotel-Shanghai-Clover-Star-Trac.jpg' },
]);

const activities = ref([
  { label: 'Bungee Jumping', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/22/b3/f1.jpg' },
  { label: 'Senderismo', image: 'https://media-magazine.trivago.com/wp-content/uploads/2019/11/27121325/hoteles-para-senderistas-junto-a-montanas.jpg' },
  { label: 'Surf', image: 'https://www.sunset.com/wp-content/uploads/surf-hotels-jamie-obrien-surf-experience-the-ritz-carlton-oahu-turtle-bay-pr-0724-1200x900.jpg' },
]);
</script>

<style scoped>
.home-container {
  max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
  margin: 0 auto; /* Centra el contenedor */
  color: rgb(185, 154, 115);
}

.carousel-image {
  object-fit: cover; /* Ajusta la imagen para cubrir el área del carrusel */
  width: 100%; /* Hace que la imagen ocupe todo el ancho */
  height: 100%; /* Hace que la imagen ocupe toda la altura */
}

.hotel-history {
  padding: 20px;
  background-color: #272020f4;
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

.service-card,
.activity-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s;
  background-color: #000000; /* Color de fondo claro */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidad */
}

.service-card:hover,
.activity-card:hover {
  transform: scale(1.05);
  background-color: #e0e0e0; /* Cambio de color en hover */
}

.service-info,
.activity-info {
  text-align: center;
}

.service-card h3,
.activity-card h3 {
  font-size: 40px; /* Tamaño de fuente más grande para el título */
  margin-bottom: 10px; /* Espaciado inferior */
}

.service-card p,
.activity-card p {
  font-size: 20px; /* Tamaño de fuente estándar */
  color: #000000; /* Color de texto más suave */
}

.services{
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.carousel-wrapper{
  flex: 1;
  max-width: 40%;
}

.carousel-text {
  position: absolute;
  bottom: 10px; /* Posiciona el texto en la parte inferior */
  left: 10px;   /* Espaciado desde el borde izquierdo */
  color: #b99a73; /* Color del texto */
  font-size: 18px; /* Tamaño de la fuente */
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para legibilidad */
  padding: 5px 10px; /* Espaciado interno del texto */
  border-radius: 4px;
}

.services-carousel,
.activities-carousel {
  border-radius: 8px; /* Bordes redondeados en el carrusel */
}

.btn-ver-mas {
  text-align: left; /* Alinea el botón a la izquierda */
  margin-top: 20px; /* Espacio entre el carrusel y el botón */
  margin-left: 20px; /* Ajusta el margen izquierdo para separarlo del borde */
}

.banner-carousel{
  border: 2px solid #000000;
}

.btn-ver-mas .q-btn {
  background-color: #d4c19c; /* Color de fondo del botón */
  color: white; /* Color del texto */
  padding: 10px 20px; /* Ajusta el relleno del botón */
  font-size: 16px; /* Tamaño de la fuente */
  border-radius: 8px; /* Bordes redondeados */
  transition: background-color 0.3s ease;
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
</style>