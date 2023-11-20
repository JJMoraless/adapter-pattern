// create a barrel with commonjs
const {getAge} = require('./get-age.plugin')
const {getId} = require('./get-id.plugin')

module.exports = {
  getAge,
  getId,
}
