export default (entity = 1) => ({
  String: entity => Array.of({ name: entity }),
  Number: entity => Array(entity).fill(undefined),
  Array: entity => entity.map(name => ({ name: name }))
}[entity.constructor.name](entity))
