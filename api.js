const { BSON: { serialize, deserialize } } = require('mongodb');
const { getMongoStuff } = require('./index');

module.exports = {
    /**
     * @param {import('mongodb').BSON} document 
     * @return {import('mongodb').BSON}
     */
    getMongoStuff: (document) => deserialize(getMongoStuff(serialize(document)))
};