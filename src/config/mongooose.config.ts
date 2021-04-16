
const mongoose = require('mongoose')

const connect = async () => {
  const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env

  const options = {
    useUnifiedTopology: true
  }

  const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

  await mongoose.connect(uri, options)
}

export { connect }
