const Todo = require ('./todo')
const d = require('./todo')

d.methods(['get', 'post', 'put', 'delete'])
d.updateOptions({new: true, runValidators: true})

module.exports  = d