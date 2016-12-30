import stop from './stopServer'

test(`stop`, () => {
  expect(typeof (stop)).toEqual(`function`)
})

test(`resolves`, () => {
  const server = {
    close: jest.fn(fn => fn())
  }

  stop(server)
    .then(() => {
      expect(server.close.mock.calls.length).toEqual(1)
    })
    .catch(error => expect(error).toBeFalsy())
})

test(`rejects`, () => {
  const server = {
    close: jest.fn(fn => fn(`there was an error`))
  }

  const success = jest.fn()

  stop(server)
    .then(success)
    .catch(error => {
      expect(error).toEqual(`there was an error`)
      expect(success.mock.calls.length).toEqual(0)
    })
})
