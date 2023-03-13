<script setup>
  import { useLoginStore } from '../stores/login'
  import { onUpdated } from 'vue';

  const credentials = useLoginStore()
</script>

<template>
  <main class="">
    <h1>{{ $t('home.welcome', {login: credentials.login}) }}</h1>
  </main>
</template>

<style lang="sass">
.parent
  background-color: red

div + p
  color: white

</style>
