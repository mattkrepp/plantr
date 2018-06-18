const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false
})
module.exports = db;

const Gardener = db.define({
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

const Plot = db.define({
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
})

const Vegetable = db.define({
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    type: Sequelize.DATE
  }
})

