<template>
    <div class="container">
      <!-- Encabezado -->
      <header class="header">
        <h1>WYTHE HOTEL</h1>
        <nav class="nav">
          <router-link to="/rooms">ROOMS</router-link>
          <router-link to="/events">EVENTS</router-link>
          <router-link to="/reyard">REYARD</router-link>
          <router-link to="/ideas">THE IDEAS</router-link>
          <router-link to="/culture">CULTURE</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </nav>
      </header>
  
      <!-- Formulario de Reserva -->
      <section class="booking-form">
        <div class="form-group">
          <label for="arrival">Arrival date</label>
          <input type="date" id="arrival" />
        </div>
        <div class="form-group">
          <label for="departure">Departure date</label>
          <input type="date" id="departure" />
        </div>
        <div class="form-group">
          <label for="adults">Number of adults</label>
          <input type="number" id="adults" min="1" />
        </div>
        <router-link to="/book" class="book-button">BOOK NOW</router-link>
      </section>
  
      <!-- Imagen principal -->
      <section class="image-container">
        <img src="@/assets/your-image.jpg" alt="Wythe Hotel" />
      </section>
    </div>
  </template>
  
  <script setup>
  // No es necesario agregar lógica aquí si no necesitas manejar datos reactivos
  </script>
  
  <style scoped>
  /* Estilos generales */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
  }
  
  .container {
    text-align: center;
    padding: 20px;
  }
  
  /* Encabezado */
  .header {
    background: #f8f8f8;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  h1 {
    font-size: 32px;
    letter-spacing: 1px;
  }
  
  .nav {
    margin: 20px 0;
  }
  
  .nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  /* Formulario de reserva */
  .booking-form {
    margin: 20px 0;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    padding: 8px;
    width: 100%;
    max-width: 250px;
  }
  
  .book-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  /* Imagen */
  .image-container {
    margin-top: 20px;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    max-width: 1000px; /* Ajusta según sea necesario */
  }
  </style>  