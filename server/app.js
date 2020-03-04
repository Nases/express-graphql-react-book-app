require('dotenv').config()

const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


const PORT = process.env.PORT || 4000
app.listen(3000, () => {
  console.log(`Server started on port ${PORT}`)
})
