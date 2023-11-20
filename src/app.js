const {getAge, getId} = require('./plugins/')
const {buildMakePerson} = require('./makePerson')
const makePerson = buildMakePerson({getAge, getId})

const jhonDoe = makePerson({name: 'John', birthDate: '1985-10-21'})

console.log(jhonDoe)
