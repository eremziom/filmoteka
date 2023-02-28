<script setup>
  import { ref, defineProps, onMounted, computed } from 'vue';
  import MovieInput from '../elements/MovieInput.vue'
  const props = defineProps(['movie', 'movieAction'])
  let payload = ref({})
  function test(){
    payload.value = {...props.movie}
    console.log(payload.value)
  }
</script>

<template>
  <div class="modal fade" id="movieModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark" style="color: yellow">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="movieModalLabel">{{ movieAction }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <MovieInput :inputId="movie.title" :inputName="$t('modal.movie-input.name.title')" inputType="text" v-model="movie.title"/>
            <MovieInput :inputId="movie.description" :inputName="$t('modal.movie-input.name.description')" inputType="text" v-model="movie.description"/>
            <MovieInput :inputId="movie.duration" :inputName="$t('modal.movie-input.name.duration')" inputType="text" v-model="movie.duration"/>
            <MovieInput :inputId="movie.year" :inputName="$t('modal.movie-input.name.year')" inputType="text" v-model="movie.year"/>
            <MovieInput :inputId="movie.type" :inputName="$t('modal.movie-input.name.type')" inputType="text" v-model="movie.type"/>
            <MovieInput :inputId="movie.link" :inputName="$t('modal.movie-input.name.link')" inputType="text" v-model="movie.link"/>
            <MovieInput :inputId="movie.img" :inputName="$t('modal.movie-input.name.img')" inputType="text" v-model="movie.img"/>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('buttons.cancel') }}</button>
          <button type="button" class="btn btn-primary" @click="$emit('saveMovie', movie)">{{ $t('buttons.save') }}</button>
        </div>
      </div>
    </div>
    <button @click="test">click</button>
  </div>
</template>