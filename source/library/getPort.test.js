import getPort from './getPort'

test(`getPort`, () => {
  expect(typeof (getPort)).toEqual(`function`)
  const server = {
    address: jest.fn(() => ({ port: 3000 }))
  }
  expect(getPort({ server })).toEqual({ server, port: 3000 })
})
