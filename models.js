const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false
})
module.exports = db;

const Gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
})

const Vegetable = db.define('vegetable', {
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

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Plot.belongsTo(Gardener);
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});
const PlotVegetable = db.model('vegetable_plot');
let newVegetable;
Vegetable.create({name: 'Artichoke', color: 'Green', planted_on: new Date()})
    .then((vegetable) => {
        newVegetable = vegetable;
        return Gardener.create({vegetableId: vegetable.id});
    })
    .then((gardener) =>{
        return Plot.create({gardenerId: gardener.id});
    })
    .then((plot) => {
        return PlotVegetable.create({
            vegetableId: newVegetable.id,
            plotId: plot.id
          })
    })

Vegetable.create({name: 'Tomato', color: 'Red', planted_on: new Date()});
Vegetable.create({name: 'Carrot', color: 'Orange', planted_on: new Date()});