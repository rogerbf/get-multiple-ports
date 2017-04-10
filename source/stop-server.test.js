const stopServer = require(`./stop-server`)

describe(`stopServer`, () => {
  test(`stops server and resolves`, () => {
    const server = {
      close: jest.fn(fn => fn())
    }

    return (
      stopServer(server)
      .then(() => {
        expect(server.close).toHaveBeenCalled()
      })
      .catch(error => expect(error).toBeFalsy())
    )
  })

  test(`rejects`, () => {
    const server = {
      close: jest.fn(fn => fn(`there was an error`))
    }

    const success = jest.fn()

    return (
      stopServer(server)
      .then(success)
      .catch(error => {
        expect(error).toEqual(`there was an error`)
        expect(success).not.toHaveBeenCalled()
      })
    )
  })
})
