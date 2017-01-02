export default (createServer, entity) => new Promise(
  (resolve, reject) => {
    const instance = createServer()
    instance.unref()
    instance.on(`error`, error => reject(error))
    instance.listen(0, () => resolve({ ...entity, server: instance }))
  }
)
