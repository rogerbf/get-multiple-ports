import parseInput from './library/parseInput'
import startServer from './library/startServer'
import getPort from './library/getPort'
import stopServer from './library/stopServer'
import compact from './library/compact'

export default input =>
  Promise.resolve(parseInput(input))
  .then(entities => Promise.all(entities.map(startServer)))
  .then(entities => entities.map(getPort))
  .then(entities => Promise.all(entities.map(stopServer)))
  .then(entities => compact(entities))