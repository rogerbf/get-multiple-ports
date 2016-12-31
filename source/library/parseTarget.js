export default target => {
  const count = typeof (target) === `number` ? Array(target).fill({}) : null
  const names = Array.isArray(target) ? target.map(name => ({ name })) : null
  const name = typeof (target) === `string` ? [{ name: target }] : null
  const empty = !target ? [{}] : null
  return (count || names || name || empty)
}
