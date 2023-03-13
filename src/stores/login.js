import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore('login', () => {

  const login = ref('')
  const password = ref('')
  const isAdmin = ref(false)
  const isLoged = ref(false)

  return { login, password, isAdmin, isLoged }
})