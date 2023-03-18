<script setup>
import { RouterLink, useRouter } from 'vue-router'
import LanguageSelector from './LanguageSelector.vue'
import { useLoginStore } from '../stores/login'
import ConfirmationModal from './ConfirmationModal.vue'
import { useLogout } from '../composables/logout.js'

const credentials = useLoginStore()
const router = useRouter()
</script>


<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid" style="max-width: 1400px">
      <a class="navbar-brand me-5" href="#">CHABRY</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul v-if="credentials.user.isLoged" class="navbar-nav mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">{{ $t('router.home') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/movies" class="nav-link">{{ $t('router.movies') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">{{ $t('router.about') }}</RouterLink>
          </li>
          <li class="nav-item">
            <a to="/logout" class="nav-link" data-bs-toggle="modal" data-bs-target="#confirmationModal" style="cursor: pointer">{{ $t('buttons.logout') }}</a>
          </li>
        </ul>
        <LanguageSelector class="ms-auto"/>
      </div>
    </div>
  </nav>
  <ConfirmationModal @confirmModal="useLogout(router)">
    <!-- <template v-slot:header>
      Potwierdź logout
    </template> -->
    <template v-slot:body>
      Czy napewno chcesz się wylogować?
    </template>
  </ConfirmationModal>

</template>