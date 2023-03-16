import client from './authClient.js'

function postLogin(payload) {
  return new Promise (((resolve, reject) => {
    client
      .post('/login', payload)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function postRegister(payload) {
  return new Promise (((resolve, reject) => {
    client
      .put('/register/', payload)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function updateAccount(payload, id) {
  return new Promise (((resolve, reject) => {
    client
      .put(`/account/${id}`, payload)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function deleteAccount() {
  return new Promise (((resolve, reject) => {
    client
      .delete(`/account/${id}`)
      .then(res => resolve(res.data))
      .catch(err => {
        if (err.response) {
          reject(err.response)
        }
        reject(err)
      })
  }))
}

function verifyToken(payload) {
  return new Promise (((resolve, reject) => {
    client
      .post('/verify', payload)
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
  postLogin,
  postRegister,
  updateAccount,
  deleteAccount,
  verifyToken
}