import client from './scrapMoviesClient.js'

function getMovie(payload) {
  return new Promise (((resolve, reject) => {
    client
      .post('/getmovie', payload)
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
  getMovie,
}