<script setup>
  const users = ['DOMINIK', 'MACIEK', 'GOSIA', 'ATINA']
</script>

<template>
  <div class="d-flex flex-row-reverse">
    <div id='a' class="show-slide bg-dark px-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
      </svg>
    </div>
    <div id='b' class="side-bar-slide bg-dark d-flex flex-column justify-content-center my-4">
      <div class="d-flex flex-column side-bar pe-4">
        <button v-for="item in users" class="btn btn-warning my-2" style="border-top-left-radius: 0; border-bottom-left-radius: 0">
          <span class="fw-bold">{{ item }}</span>
        </button>
      </div>
    </div>
  </div>
</template>