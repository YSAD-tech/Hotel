<template>
  <div class="q-pa-md header">
    <!-- Tabs for Navigation -->
    <q-tabs v-model="tab" class="tabs text-teal justify-center">
      <q-btn flat to="/rooms"><p class="textBtn">Rooms</p></q-btn>
      <q-btn flat to="/services"><p class="textBtn">Services</p></q-btn>

      <!-- Logo centered between the tabs -->
      <q-btn flat unelevated class="logo-btn" to="/">
        <img src="/logo_transparent.png" alt="Hotel Logo" class="icono" />
      </q-btn>

      <q-btn flat to="/activities"><p class="textBtn">Activities</p></q-btn>
      <q-btn flat to="/contact"><p class="textBtn">Contact</p></q-btn>
    </q-tabs>
  </div>

  <!-- Display the corresponding page -->
  <div class="containerAll">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tab = ref('home')

// Navigation function
const goto = (path) => {
  router.push(path)
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0,0,0,0.4);
  position: fixed;
  z-index: 1;
  height: 90px;
  width: 100%;
  justify-content: center;
  top: 0px;
  text-align: center;
  margin-bottom: 20px;
}

.containerAll{
  margin-top: 90px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 30px; /* Espaciado entre tabs */
  align-items: center;
}

.q-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-weight: bold;
}

.textBtn {
  font-size: 16px;
  text-transform: uppercase;
}

.logo-btn {
  /* Mantiene el tamaño del botón fijo */
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icono {
  width: 100px;
  transition: transform 0.3s ease-in-out;
}

/* Efecto de agrandado del logo sin afectar el tab */
.logo-btn:hover .icono {
  transform: scale(1.2);
}

@media (min-width: 1024px) {
  .icono {
    width: 120px;
  }
}
</style>
