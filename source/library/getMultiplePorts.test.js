import getMultiplePorts from './getMultiplePorts'

test(`getMultiplePorts`, () => {
  expect(typeof (getMultiplePorts)).toEqual(`function`)

  const server = {
    unref: jest.fn(),
    on: jest.fn(),
    listen: jest.fn((port, fn) => fn()),
    address: () => ({ port: 22 }),
    close: fn => fn()
  }

  const createServer = jest.fn(() => {
    return server
  })

  getMultiplePorts(createServer, `ssh`)
  .then(ports => expect(ports).toEqual({ ssh: 22 }))
  .catch(error => expect(error).toBeFalsy())
})
