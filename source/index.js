import { createServer } from 'net'
import getMultiplePorts from './library/getMultiplePorts'

export default getMultiplePorts.bind(null, createServer)
