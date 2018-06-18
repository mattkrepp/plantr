const db = require('./models')

db.sync()
  .then(() => {
    console.log('Database Synced!');
    db.close();
  })
  .catch(err => {
    console.log('Something went wrong');
    console.log(err);
    db.close();
  })