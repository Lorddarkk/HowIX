const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://luannp:QegOPNTtHKUScJby@pet.iy6hadq.mongodb.net/?retryWrites=true&w=majority')
  console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose
