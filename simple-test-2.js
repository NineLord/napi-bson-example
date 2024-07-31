const { inspect } = require('util');
const { Timestamp } = require('mongodb');
const { getMongoStuff } = require('.');

console.log(`Node received=${inspect(getMongoStuff({
    _id: "shimi",
    ts: new Timestamp(123,456)
}))}`);

console.log();

console.log(`Node received=${inspect(getMongoStuff({
    _id: "shimi",
    age: 8,
    ts: new Timestamp(123,456)
}))}`);


