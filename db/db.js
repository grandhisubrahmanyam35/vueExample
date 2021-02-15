const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'MyOrganization'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

const insertItem = (item) => {
  const collection = db.collection('Employee')
  return collection.insertOne(item)
}

const getItems = () => {
  const collection = db.collection('Employee')
  return collection.find({}).toArray()
}

module.exports = { init, insertItem, getItems }
