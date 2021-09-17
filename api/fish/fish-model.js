const db = require('../../data/dbConfig')

function getAll() {
    return db('fish')
}

async function insert(fish) {
    return null
}

function remove(id) {
    return null
}

module.exports = {
    getAll,
    insert,
    remove
}