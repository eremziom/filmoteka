<script setup>
import { RouterLink } from 'vue-router'
import LanguageSelector from './LanguageSelector.vue'

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid" style="max-width: 1400px">
      <a class="navbar-brand me-5" href="#">CHABRY</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">{{ $t('router.home') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/movies" class="nav-link">{{ $t('router.movies') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">{{ $t('router.about') }}</RouterLink>
          </li>
        </ul>
        <LanguageSelector />
      </div>
    </div>
  </nav>
</template>