<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <!-- Logo as Home Link -->
      
      <!-- Tabs for Navigation -->
      <q-tabs v-model="tab" class="text-teal">
        <q-tab name="Rooms" label="Rooms" @click="goto('/rooms')" />
        <q-tab name="Services" label="Services" @click="goto('/services')" />
        <router-link to="/">
          <img src="/logo_transparent.png" alt="Hotel Logo" />
        </router-link>
        <q-tab name="Activities" label="Activities" @click="goto('/activities')" />
        <q-tab name="Contact" label="Contact" @click="goto('/contact')" />
      </q-tabs>
    </div>

    <!-- Display the corresponding page -->
    <div>
      <router-view></router-view>
    </div>
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
img {
  width: 150px;
}

.q-gutter-y-md {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.q-tabs {
  flex-grow: 1;
}
</style>