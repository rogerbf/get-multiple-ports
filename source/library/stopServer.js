export default entity => new Promise(
  (resolve, reject) => {
    entity.server.close(error => {
      error && reject(error)
      resolve(entity)
    })
  }
)
