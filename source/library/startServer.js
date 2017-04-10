export default createServer => new Promise(
  (resolve, reject) => {
    const instance = createServer()
    instance.unref()
    instance.on(`error`, reject)
    instance.listen(0, resolve.bind(null, instance))
  }
)
