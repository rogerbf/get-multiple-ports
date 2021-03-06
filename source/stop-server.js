module.exports = server => new Promise(
  (resolve, reject) => {
    server.close(error => {
      error && reject(error)
      resolve(server)
    })
  }
)
