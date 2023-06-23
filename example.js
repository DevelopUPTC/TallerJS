const {cousing,isPair,sum} = require('./tools')

const Dish = require('./dish')

console.log(cousing(11))

console.log( isPair(21))

console.log( sum(23,76))

const tomahawk = new Dish("Carne",690,78000);

tomahawk.setName("Beef")

console.log( tomahawk.toString())