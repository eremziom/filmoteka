import client from './moviesClient.js'

function getMovies() {
  return new Promise (((resolve, reject) => {
    client
      .get('/movies')
      .then(res => resolve(res))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function getMovie(id) {
  return new Promise (((resolve, reject) => {
    client
      .get(`/movies/${id}`)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function postMovie(payload) {
  return new Promise (((resolve, reject) => {
    client
      .post('/movies', payload)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function updateMovie(payload, id) {
  return new Promise (((resolve, reject) => {
    client
      .put(`/movies/${id}`, payload)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function deleteMovie() {
  return new Promise (((resolve, reject) => {
    client
      .post(`/movies/${id}`)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

export default { 
  getMovies,
  getMovie,
  postMovie,
  deleteMovie,
  updateMovie,
}