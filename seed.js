const db = require('./models')

try {
  db.sync({force: true})
  db.close()
} catch(error){console.log(error)}

db.sync({force: true})
  .then(() => {
    console.log('Database Synced!')
  })
  .catch(err => {
    console.log('Something went wrong')
    console.log(err)
  })
  .finally(()=> {
    db.close()
  })
