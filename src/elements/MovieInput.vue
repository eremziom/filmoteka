<script setup>
  import { ref } from 'vue';
  const props = defineProps(['inputId', 'inputName', 'inputType', 'modelValue'])
  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-3">
    <label :for="inputId + 'id'" class="form-label">{{ inputName }}</label>
    <input :type="inputType" class="form-control" :id="inputId" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" style="background-color: yellow;">
  </div>
</template>