// db.js
import pg from 'pg'
import 'dotenv/config'

const { Client } = pg

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

// const client = new Client({
//   connectionString: process.env.DATABASE_URL
// })

const client = new Client({
    user: DB_USER, 
    password: DB_PASSWORD,
    host: DB_HOST, 
    port: DB_PORT,
    database: DB_NAME 
  })

client.connect()
  .then(() => console.log('DB is connected'))
  .catch((err) => { 
    console.error('Connection error', err.stack)
    process.exit(1)
  })

const closeClient = async () => {
  try {
    await client.end()
    console.log('DB connection closed')
  } catch (err) {
    console.error('Error closing DB connection', err.stack)
  }
}

process.on('exit', closeClient)
process.on('SIGINT', async () => {
  await closeClient()
  process.exit(0)
})

export { client }
