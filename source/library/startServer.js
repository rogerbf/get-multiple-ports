import net from 'net'

export default (target, createServer = net.createServer) => new Promise(
  (resolve, reject) => {
    const instance = createServer()
    instance.unref()
    instance.on(`error`, error => reject(error))
    instance.listen(0, () => resolve({ ...target, server: instance }))
  }
)
