'use strict';

const assert = require('assert');

//  compostion/composability - composing lot's of small functions into a bigger function

const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Cari', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];

const isDog = (animal) => {
  return animal.species === 'dog'
}

const isNotDog = (animal) => {
  return animal.species !== 'dog'
}

const dogs = animals.filter(isDog);
const notDogs = animals.filter(isNotDog)

console.log('dogs ', dogs);
console.log('not dogs', notDogs);