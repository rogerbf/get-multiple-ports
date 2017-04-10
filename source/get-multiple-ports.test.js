const ports = require(`./get-multiple-ports`)

describe(`ports`, () => {
  test(`ports(2)`, () => {
    const testPorts = [ 9050, 9051 ]
    const createServer = jest.fn(() => ({
      unref: jest.fn(),
      on: jest.fn(),
      listen: jest.fn((port, fn) => fn()),
      address: jest.fn(() => {
        return { port: testPorts.shift() }
      }),
      close: jest.fn(fn => fn())
    }))

    return ports(createServer, 2)
    .then(port => {
      expect(port).toEqual([ 9050, 9051 ])
    })
    .catch(error => {
      expect(error).toBeUndefined()
    })
  })

  test(`ports([ 'one', 'two' ])`, () => {
    const testPorts = [ 9050, 9051 ]
    const createServer = jest.fn(() => ({
      unref: jest.fn(),
      on: jest.fn(),
      listen: jest.fn((port, fn) => fn()),
      address: jest.fn(() => {
        return { port: testPorts.shift() }
      }),
      close: jest.fn(fn => fn())
    }))

    return ports(createServer, [ `one`, `two` ])
    .then(port => {
      expect(port).toEqual({ one: 9050, two: 9051 })
    })
    .catch(error => {
      expect(error).toBeUndefined()
    })
  })

  test(`ports([ 'one', undefined ])`, () => {
    const testPorts = [ 9050, 9051 ]
    const createServer = jest.fn(() => ({
      unref: jest.fn(),
      on: jest.fn(),
      listen: jest.fn((port, fn) => fn()),
      address: jest.fn(() => {
        return { port: testPorts.shift() }
      }),
      close: jest.fn(fn => fn())
    }))

    return ports(createServer, [ `one`, undefined ])
    .then(port => {
      expect(port).toEqual([ { one: 9050 }, 9051 ])
    })
    .catch(error => {
      expect(error).toBeUndefined()
    })
  })
})
