'use strict';

const collections = require('../data/collections');

// reduce - expresses any list transformation

const ordersCollection = collections.orders;


const total = ordersCollection.reduce((sum, cur) => {
  sum += cur.amount;
  return sum;
}, 0);

console.log(total)