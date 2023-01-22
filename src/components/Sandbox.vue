<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useMouse } from '../composables/counter.js'
  import { useFetch } from '../composables/fetch';

  const {x, y, update} = useMouse()
  const { dta, error } = useFetch('test/url')

  onMounted(() => addEventListener('mousemove', update))
</script>

<template>
  <div>
    Mouse Position: {{ x }} and {{ y }}
  </div>
  <!-- <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
  <div v-else>Loading...</div> -->
</template>