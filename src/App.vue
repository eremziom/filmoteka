<script setup>
import { RouterView } from 'vue-router'

import TopBar from './components/TopBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  
  <header>
    <TopBar />
  </header>
  <RouterView />
  <footer class="footer mt-auto py-3 footer-container bg-dark ">
    <FooterBar />
  </footer>
</template>

<style lang="sass" scoped>
</style>
