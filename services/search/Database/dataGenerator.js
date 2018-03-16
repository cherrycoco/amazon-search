const fs = require('fs');
const axios = require('axios');
const faker = require('faker');
// const file = require('./ten-million-docs.json');

const productGenerator = async () => {

  let name = await faker.commerce.productName();
  let price = await faker.commerce.price();

  let product = {
    name: name,
    price: price
  };

  return product;
};

const productNameGenerator = async () => {
  let name = await faker.commerce.productName();
  
  fs.appendFile('./query.csv', `${name}\n`, (res, err) => {
    if (err) {
      throw err
    } else {
      console.log(name);
    }
  });
}

for (var i = 0; i < 10000; i++) {
  productNameGenerator();
}

// writestream to ten-million-docs.txt
// const wstream = fs.createWriteStream('./ten-million-docs.json');

const generateData = async (startId, endId) => {
  await wstream.write('[');
  for (let i = startId; i <= endId; i++) {
    let product = await productGenerator();
    let doc = {index:  {
      '_index': 'products', 
      '_type': 'product', 
      '_id': i 
    }}

    await wstream.write(JSON.stringify(doc) + ',');

    if (i === endId) {
      await wstream.write(JSON.stringify(product));
    } else {
      await wstream.write(JSON.stringify(product) + ',');
    }
  }
  await wstream.write(']');
  wstream.end();
}

let x = parseInt(process.argv[2]);
let y = x + 90000
// generateData(x, y);