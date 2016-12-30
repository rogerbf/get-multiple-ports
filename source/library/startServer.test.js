import start from './startServer.js'

test(`start`, () => {
  expect(typeof (start)).toEqual(`function`)

  const server = {
    unref: jest.fn(),
    on: jest.fn(),
    listen: jest.fn((port, fn) => fn())
  }

  const createServer = jest.fn(() => {
    return server
  })

  const actual = start({ createServer, name: `robot` })
  .then(instance => {
    expect(typeof (instance)).toEqual(`object`)
    expect(instance.name).toEqual(`robot`)
    expect(instance.instance).toEqual(server)
  })
  .catch(error => {
    expect(error).toBeFalsy()
  })

  expect(actual.constructor.name).toEqual(`Promise`)
  expect(server.unref.mock.calls.length).toEqual(1)
  expect(server.on.mock.calls[0][0]).toEqual(`error`)
  expect(server.listen.mock.calls[0][0]).toEqual(0)
})
