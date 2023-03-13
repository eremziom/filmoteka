<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import { useMouse } from '../composables/counter.js'
  import { useFetch } from '../composables/fetch'
  import moviesApi from '../api/moviesApi'
  import scrapMoviesApi from '../api/scrapMoviesApi'
  import MovieCard from './MovieCard.vue'
  import MovieModal from './MovieModal.vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const {x, y, update} = useMouse()
  const { dta, error } = useFetch('test/url')
  const movies = ref([])
  let movieToEdit = ref({})
  let movieAction = ref()

  let myModal = ref('')

  let filmweblink = ref('')

  onMounted(() => {
    // getMovies()
  })

  function showAxios() {
    console.log(moviesApi.getMovies)
  }

  function test() {
    console.log(movieToEdit)
    var myModal = new bootstrap.Modal(document.getElementById('movieModal'))
    myModal.show()
  }

  function getmovie() {
    moviesApi.getMovies('63cc4c5e94ddb56735f22bc1')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  function getMovies() {
    moviesApi.getMovies()
      .then((res) => {
        console.log(res),
        movies.value = res.data
      })
      .catch((err) => console.log(err))
  }

  function editMovie(movie) {
    movieToEdit.value = {...movie}
    movieAction.value = t('modal.title.edit')
    myModal = new bootstrap.Modal(document.getElementById('movieModal'))
    myModal.show()
  }

  function saveMovie(movie) {
    console.log('request', movie, movie._id)
    moviesApi.updateMovie(movie, movie._id)
      .then((res) => {
        console.log(res)
        myModal.hide()
        getMovies()
      })
      .catch((err) => console.log(err))
  }

  function scrapMovie() {
    console.log(filmweblink.value)
    let payload = {
      link: filmweblink.value
    }
    scrapMoviesApi.getMovie(payload)
      .then((res) => {
        console.log(res)
        movies.value.push(res)
      })
      .catch((err) => console.log(err))
  }
</script>

<template>
  <div class="container-lg text-center">
    <input class="w-75 mt-5" placeholder="Filmweb movie link" v-model="filmweblink">
    <button @click="scrapMovie">Upload</button>
    <div class="row">
      <MovieCard v-for="item in movies" :movie="item" @edit="editMovie">
      </MovieCard>
    </div>
    <MovieModal :movie="movieToEdit" :movieAction="movieAction" @saveMovie="saveMovie"/>
  </div>
</template>