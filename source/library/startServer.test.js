import start from './startServer'

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

  const entity = { name: `kirk` }

  const actual = start(entity, createServer)
  .then(instance => {
    expect(instance).toEqual({ ...entity, server })
  })
  .catch(error => {
    expect(error).toBeFalsy()
  })

  expect(actual.constructor.name).toEqual(`Promise`)
  expect(server.unref.mock.calls.length).toEqual(1)
  expect(server.on.mock.calls[0][0]).toEqual(`error`)
  expect(server.listen.mock.calls[0][0]).toEqual(0)
})

test(`rejects`, () => {
  const server = {
    unref: jest.fn(),
    on: jest.fn((eventName, handler) => {
      eventName === `error` && handler(`something went wrong`)
    }),
    listen: jest.fn((port, fn) => fn())
  }

  const createServer = jest.fn(() => {
    return server
  })

  const entity = { name: `kirk` }

  start(entity, createServer)
  .then(instance => {
    expect(instance).toBeFalsy()
  })
  .catch(error => {
    expect(error).toEqual(`something went wrong`)
  })
})
