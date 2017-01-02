import normalizeInput from './normalizeInput'
import startServer from './startServer'
import addPort from './addPort'
import stopServer from './stopServer'
import extractResults from './extractResults'

export default (createServer, input) =>
  Promise.resolve(normalizeInput(input))
  .then(entities =>
    Promise.all(entities.map(entity => startServer(createServer, entity)))
  )
  .then(entities => entities.map(entity => addPort(entity)))
  .then(entities => Promise.all(entities.map(entity => stopServer(entity))))
  .then(entities => extractResults(entities))
