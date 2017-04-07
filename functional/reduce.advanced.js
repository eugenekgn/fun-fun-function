const fs = require('fs');

const output = fs.readFileSync('./data/data.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    const customerName = line[0];

    customers[customerName] =  customers[customerName] || [];
    customers[customerName].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });

    return customers;
  }, {});

console.log(output);







