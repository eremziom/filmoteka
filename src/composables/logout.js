// import { useRouter } from "vue-router"
import { useLoginStore } from "../stores/login"

export function useLogout(router){
  const credentials = useLoginStore()
  credentials.clearUser()
  router.push('/login')
}