import { ref } from 'vue'

export function useFetch(url) {
  const error = ref(null)
  const data = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => data.value = json)
    .catch((err) => error.value = err)

  return { data, error}
}