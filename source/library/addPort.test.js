import addPort from './addPort'

test(`addPort`, () => {
  expect(typeof (addPort)).toEqual(`function`)
  const server = {
    address: jest.fn(() => ({ port: 3000 }))
  }
  expect(addPort({ server })).toEqual({ server, port: 3000 })
})
