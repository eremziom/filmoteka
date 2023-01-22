<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useMouse } from '../composables/counter.js'
  import { useFetch } from '../composables/fetch'
  import moviesApi from '../api/moviesApi'

  const {x, y, update} = useMouse()
  const { dta, error } = useFetch('test/url')

  onMounted(() => addEventListener('mousemove', update))

  function showAxios() {
    console.log(moviesApi.getMovies)
  }

  function getmovies() {
    moviesApi.getMovies('63cc4c5e94ddb56735f22bc1')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const payload = {
    author: "Gosia",
    description: "Film o królowej",
    duration: 170,
    title: "Królowa Margot",
    type: "kostiumowy, dramat",
    year: 2017
  }

  function postmovies() {
    moviesApi.postMovie(payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
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
  <div>
    <button @click="getmovies">show</button>
  </div>
</template>