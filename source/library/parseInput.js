export default entity => {
  const count = typeof (entity) === `number` ? Array(entity).fill({}) : null
  const names = Array.isArray(entity) ? entity.map(name => ({ name })) : null
  const name = typeof (entity) === `string` ? [{ name: entity }] : null
  const empty = !entity ? [{}] : null
  return (count || names || name || empty)
}
