const normalize = require(`./normalize-input`)

describe(`normalize`, () => {
  test(`called with no arguments`, () => {
    expect(normalize()).toEqual([undefined])
  })

  test(`called with a number`, () => {
    expect(normalize(3)).toEqual([undefined, undefined, undefined])
  })

  test(`called with a string`, () => {
    expect(normalize(`ng`)).toEqual([ `ng` ])
  })

  test(`called with an array`, () => {
    const data = [ `dom`, `andra` ]
    expect(normalize(data)).toEqual(data)
  })
})
