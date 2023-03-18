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

  function clearUser() {
    user.login.value = ''
    user.isAdmin.value = ''
    user.isLoged.value = false
    user.token.value = ''
    localStorage.removeItem('token')
  }

  return { user, setUser, clearUser }
})