const normalize = require(`./normalize-input`)
const startServer = require(`./start-server`)
const stopServer = require(`./stop-server`)

module.exports = async (createServer, keys) => {
  const names = normalize(keys)
  const servers = await Promise.all(
    Array(names.length)
    .fill(undefined)
    .map(startServer.bind(null, createServer))
  )
  const ports = servers.map(server => server.address().port)
  await Promise.all(servers.map(stopServer))

  return (
    names
    .filter(name => typeof (name) === `string`)
    .length === names.length
    ? names.reduce(
      (results, name, index) =>
        Object.assign(results, { [name]: ports[index] }),
      {}
    )
    : (
      names.reduce(
        (results, name, index) =>
        name === undefined
        ? [ ...results, ports[index] ]
        : [ ...results, { [name]: ports[index] } ],
        []
      )
    )
  )
}
