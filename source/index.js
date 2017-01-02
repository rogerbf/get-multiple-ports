import { createServer } from 'net'
import normalizeInput from './library/normalizeInput'
import startServer from './library/startServer'
import addPort from './library/addPort'
import stopServer from './library/stopServer'
import compact from './library/compact'

export default input =>
  Promise.resolve(normalizeInput(input))
  .then(entities =>
    Promise.all(entities.map(entity => startServer(entity, createServer)))
  )
  .then(entities => entities.map(entity => addPort(entity)))
  .then(entities => Promise.all(entities.map(entity => stopServer(entity))))
  .then(entities => compact(entities))
