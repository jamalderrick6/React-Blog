const postSchema = require('./posts')

const resolvers = [
    postSchema.resolvers
]

const typeDefs = [
    postSchema.schema
]

module.exports = {
    resolvers,
    typeDefs
}