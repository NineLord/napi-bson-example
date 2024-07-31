const { inspect } = require('util');
const { BSON: { serialize, deserialize }, Timestamp } = require('mongodb');
const { getMongoStuff } = require('./index');

function test(document) {
    const buffer = serialize(document);
    // console.log(`Send Node: typeof=${typeof buffer} ; inspect=${inspect(buffer)}`);
    const result = getMongoStuff(buffer);
    // console.log(`Receive Node: typeof=${typeof result} ; inspect=${inspect(result)}`);
    const newDoc = deserialize(result);
    console.log(`Node received=${inspect(newDoc)}`);
}

test({
    _id: "shimi",
    ts: new Timestamp(123,456)
});
console.log();
test({
    _id: "shimi",
    age: 8,
    ts: new Timestamp(123,456)
});



