<script setup>
  const props = defineProps(['movie'])
</script>

<template>
  <div class=" col-12 col-md-6 col-xl-4 mt-4">
    <div class="card bg-dark" style="color: white">
      <img :src="movie.cover" class="card-img-top" :alt="movie.title" style="max-height: 285px; max-width: 200px; margin: 0 auto">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <p class="card-text"><strong>Ocena widzów: </strong>{{ movie.pubRate }}</p>
          <p class="card-text"><strong>Ocena krytyków: </strong>{{ movie.critRate }}</p>
        </div>
        <h5 class="card-title"><a :href="movie.link">{{ movie.title }}</a></h5>
        <h6 class="card-title"><a :href="movie.link">{{ movie.originalTitle }}</a></h6>
        <p class="card-text">{{ movie.shortDescription }}</p>
        <p class="card-text" style="text-align: left;"><strong>{{ $t('card.type') }}:</strong> 
          <span v-for="item in movie.genres">{{ ' ' + item }}</span>
        </p>
        <p class="card-text" style="text-align: left;"><strong>Reżyseria: </strong> 
          <span v-for="item in movie.directors">{{ ' ' + item.name }}</span>
        </p>
        <p class="card-text" style="text-align: left;"><strong>Główni Aktorzy:</strong> 
          <span v-for="item in movie.actors">{{ ' ' + item }}</span>
        </p>
        <p class="card-text" style="text-align: left;"><strong>Produkcja:</strong> 
          <span v-for="item in movie.productions">{{ ' ' + item }}</span>
        </p>
        <p class="card-text" style="text-align: left;"><strong>{{ $t('card.year') }}:</strong> {{ movie.year }}</p>
        <p class="card-text" style="text-align: left;"><strong>{{ $t('card.duration')}}:</strong> {{ movie.duration }}</p>
        <p>Długi Opis:</p>
        <p class="card-text">{{ movie.longDescription }}</p>
        <button class="btn btn-primary" @click="$emit('edit', movie)">{{ $t('buttons.edit') }}</button>
      </div>
    </div>
  </div>
</template>