<script setup>
  import { ref, defineProps, onMounted, computed } from 'vue';
</script>

<template>
  <div class="modal fade" id="confirmationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content bg-dark" style="color: yellow">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="btn-close" style="background-color: yellow" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('buttons.no') }}</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$emit('confirmModal')">{{ $t('buttons.yes') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>