import normalizeInput from './normalizeInput'

test(`normalizeInput`, () => {
  expect(typeof (normalizeInput)).toEqual(`function`)
  expect(normalizeInput()).toEqual([{}])
  expect(normalizeInput(3)).toEqual([{}, {}, {}])
  expect(normalizeInput(`ng`)).toEqual([{ name: `ng` }])
  expect(normalizeInput([`kirk`, `spock`, `sulu`]))
    .toEqual([{ name: `kirk` }, { name: `spock` }, { name: `sulu` }])
})
