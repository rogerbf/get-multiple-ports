import parseInput from './parseInput'

test(`parseInput`, () => {
  expect(typeof (parseInput)).toEqual(`function`)
  expect(parseInput()).toEqual([{}])
  expect(parseInput(3)).toEqual([{}, {}, {}])
  expect(parseInput(`ng`)).toEqual([{ name: `ng` }])
  expect(parseInput([`kirk`, `spock`, `sulu`]))
    .toEqual([{ name: `kirk` }, { name: `spock` }, { name: `sulu` }])
})
