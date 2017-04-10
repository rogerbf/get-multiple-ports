const start = require(`./start-server`)

describe(`startServer`, () => {
  test(`resolves with a server instance`, () => {
    expect(typeof (start)).toEqual(`function`)

    const server = {
      unref: jest.fn(),
      on: jest.fn(),
      listen: jest.fn((port, fn) => fn())
    }

    const createServer = jest.fn(() => {
      return server
    })

    const actual = (
    start(createServer)
    .then(instance => {
      expect(instance).toEqual(server)
    })
    .catch(error => {
      expect(error).toBeFalsy()
    })
  )

    expect(actual.constructor.name).toEqual(`Promise`)
    expect(server.unref).toHaveBeenCalled()
    expect(server.on).toHaveBeenCalled()
    expect(server.listen).toHaveBeenCalled()
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

    start(createServer)
    .then(instance => {
      expect(instance).toBeFalsy()
    })
    .catch(error => {
      expect(error).toEqual(`something went wrong`)
    })
  })
})
