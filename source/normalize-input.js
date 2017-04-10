module.exports = (entity = 1) => ({
  String: entity => Array.of(entity),
  Number: entity => Array(entity).fill(undefined),
  Array: entity => entity
}[entity.constructor.name](entity))
