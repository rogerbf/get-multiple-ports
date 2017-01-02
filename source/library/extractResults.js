export default entities => {
  const compacted = entities.reduce(
    (acc, entity) => (
      entity.name
      ? [ ...acc, { [entity.name]: entity.port } ]
      : [ ...acc, entity.port ]
    ), []
  )

  return compacted.length === 1 ? compacted[0] : compacted
}
