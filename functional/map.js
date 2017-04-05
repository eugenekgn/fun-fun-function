'use strict';

const collections = require('../data/collections');

// map - iterates through an array transforming values 

const animalsCollection = collections.animals;

const getNames = (a) => `${a.name} is a ${a.species}`;

const names = animalsCollection.map(getNames);

console.log(names);