import parseTarget from './parseTarget'

test(`parseTarget`, () => {
  expect(typeof (parseTarget)).toEqual(`function`)
  expect(parseTarget()).toEqual([{}])
  expect(parseTarget(3)).toEqual([{}, {}, {}])
  expect(parseTarget(`ng`)).toEqual([{ name: `ng` }])
  expect(parseTarget([`kirk`, `spock`, `sulu`]))
    .toEqual([{ name: `kirk` }, { name: `spock` }, { name: `sulu` }])
})
