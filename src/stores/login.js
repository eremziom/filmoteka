import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore('login', () => {

  const user = {
    login: ref(''),
    isAdmin: ref(false),
    isLoged: ref(false),
    token: ref('')
  }

  function setUser(payload) {
    user.login.value = payload.login
    user.isAdmin.value = payload.isAdmin
    user.isLoged.value = true
    user.token.value = payload.token
    localStorage.setItem('token', user.token.value)
  }

  return { user, setUser }
})