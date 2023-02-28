<script setup>
  const props = defineProps(['movie'])
</script>

<template>
  <div class=" col-12 col-md-6 col-xl-4 mt-4">
    <div class="card bg-dark" style="color: white">
      <img :src="movie.img" class="card-img-top" :alt="movie.title" style="max-height: 285px; max-width: 200px; margin: 0 auto">
      <div class="card-body">
        <h5 class="card-title"><a :href="movie.link">{{ movie.title }}</a></h5>
        <p class="card-text">{{ movie.description }}</p>
        <p class="card-text" style="text-align: left;"><strong>{{ $t('card.type') }}:</strong> {{ movie.type }}</p>
        <p class="card-text" style="text-align: left;"><strong>{{ $t('card.year') }}:</strong> {{ movie.year }}</p>
        <p class="card-text" style="text-align: left;"><strong>{{ $t('card.duration')}}:</strong> {{ movie.duration }}</p>
        <button class="btn btn-primary" @click="$emit('edit', movie)">{{ $t('buttons.edit') }}</button>
      </div>
    </div>
  </div>
</template>