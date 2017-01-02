import extractResults from './extractResults'

test(`extractResults`, () => {
  expect(typeof (extractResults)).toEqual(`function`)

  expect(
    extractResults([
      { name: `kirk`, port: 22 },
      { name: `spock`, port: 443 },
      { name: `sulu`, port: 467 }
    ])
  ).toEqual(
    [
      { kirk: 22 },
      { spock: 443 },
      { sulu: 467 }
    ]
  )

  expect(
    extractResults([
      { port: 22 },
      { name: `spock`, port: 443 },
      { port: 467 }
    ])
  ).toEqual(
    [
      22,
      { spock: 443 },
      467
    ]
  )

  expect(extractResults([ { port: 22 } ])).toEqual(22)
})
