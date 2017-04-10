const ports = require(`./get-multiple-ports`)

describe(`ports`, () => {
  it(`is a function`, () => {
    expect(typeof (ports)).toEqual(`function`)
  })

  test(`happy path`, () => {
    const createServer = jest.fn(() => ({
      unref: jest.fn(),
      on: jest.fn(),
      listen: jest.fn((port, fn) => fn()),
      address: jest.fn(() => {
        return { port: 9050 }
      }),
      close: jest.fn(fn => fn())
    }))

    return ports(createServer)
    .then(port => {
      expect(port).resolves().toEqual(9050)
    })
    .catch(error => {
      expect(error).toBeUndefined()
    })
  })
})
