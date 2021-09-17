const db = require('../../data/dbConfig')

function getAll() {
    return db('fish')
}

function getById(id) {
    return db('fish')
        .where('id', id).first()
}

async function insert(fish) {
    return db('fish')
        .insert(fish)
        .then(([id]) => {
            return getById(id)
        })
}

function remove(id) {
    return null
}

module.exports = {
    getAll,
    insert,
    remove
}