import compact from './compact'

test(`compact`, () => {
  expect(typeof (compact)).toEqual(`function`)

  expect(
    compact([
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
    compact([
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

  expect(compact([ { port: 22 } ])).toEqual(22)
})
