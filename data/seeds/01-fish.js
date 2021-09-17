exports.seed = function(knex, Promise) {
    return knex('fish')
        .truncate()
        .then(function() {
            return knex('fish').insert([
                { species: 'red' },
                { species: 'blue' },
                { species: 'green' },
                { species: 'yellow' },
            ])
        })
}