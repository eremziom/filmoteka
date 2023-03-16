<script setup>
  import { useLoginStore } from '../stores/login'
  import { useRouter, useRoute } from 'vue-router'
  import { ref } from 'vue';
  import authApi from '../api/authApi/';
  
  const router = useRouter()
  const credentials = useLoginStore()
  const login = ref('')
  const password = ref('')

  function logIn() {
    const payload = {
      login: login.value,
      password: password.value
    }
    authApi.postLogin(payload)
      .then((res) => {
        console.log(res)
        credentials.setUser(res)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })

  }

</script>

<template>
  <div>
    <form @submit.prevent="logIn" style="color:white; max-width: 300px; margin: 30px auto">
      <div class="mb-3">
        <label for="loginInput" class="form-label">{{ $t('login.login_label') }}</label>
        <input class="form-control" id="loginInput" aria-describedby="loginHelp" v-model="login" autocomplete="off">
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">{{ $t('login.password_label') }}</label>
        <input type="password" class="form-control" id="passwordInput" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">{{ $t('buttons.login') }}</button>
    </form>
  </div>
</template>