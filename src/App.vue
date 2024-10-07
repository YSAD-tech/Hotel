<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <router-link to="/">
          <img src="../public/logo_transparent.png" alt="Descripción de la imagen" />
      </router-link>
      <q-tabs v-model="tab" class="text-teal">
        <q-tab name="Rooms" label="Rooms" @click="goto('/rooms')"/>
        <q-tab name="Services" label="Services" @click="goto('/services')"/>
        <q-tab name="Activities" label="Activities" @click="goto('/activities')"/>
        <q-tab name="Contact" label="Contact" @click="goto('/contact')"/>
      </q-tabs>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const tab = ref("home");
const goto = (path) =>{
  router.push(path);
}
</script>
<style>
img{
width: 150px;
}
.q-gutter-y-md{
  display: flex;
  flex-wrap: wrap;
  height: 100px;
}
.q-gutter-y-md q-tabs{
  height: 100px;
}
</style>