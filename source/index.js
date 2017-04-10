const { createServer } = require(`net`)
const ports = require(`./get-multiple-ports`)

module.exports = ports.bind(null, createServer)
