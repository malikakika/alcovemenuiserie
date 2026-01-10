

<script setup lang="ts">
import Footer from '@/components/layout/Footer.vue'
import TopBar from '@/components/layout/TopBar.vue'
import NavBar from '@/components/layout/NavBar.vue'
</script>

<template>
  <TopBar />
  <NavBar />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>
