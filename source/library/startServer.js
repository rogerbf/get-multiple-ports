export default ({ createServer, name }) => new Promise(
  (resolve, reject) => {
    const server = createServer()
    server.unref()
    server.on(`error`, reject)
    server.listen(0, () => {
      resolve({ name, instance: server })
    })
  }
)
