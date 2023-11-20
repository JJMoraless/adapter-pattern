/**
 *
 * we use the adapter pattern to doesn't depend on the implementation of the third-party dependencies
 * we use factory function or a clousure to make our entities highly decoupled
 * and then we will use dependency injection.
 *
 */

const buildMakePerson = ({getAge, getId}) => {
  return ({name, birthDate}) => {
    const person = {
      id: getId(),
      name: 'John',
      age: getAge(birthDate),
    }

    return person
  }
}

module.exports = {buildMakePerson}
