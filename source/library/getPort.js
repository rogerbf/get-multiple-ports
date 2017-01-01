export default entity => ({ ...entity, port: entity.server.address().port })
