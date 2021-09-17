const db = require('../../data/dbConfig')
const Fish = require('./fish-model')

test('proper environment for tests', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})

describe('Fish db access functions', () => {

    describe('Fish.getAll', () => {
        it('resolves to all fish in the fish table',
        async () => {
            const fishes = await Fish.getAll()
            expect(fishes).toHaveLength(4)
        })
        it('resolves to the correct fish shapes', async () => {
            const fishes = await Fish.getAll()
            expect(fishes[0]).toHaveProperty('id', 1)
            expect(fishes[0]).toHaveProperty('species', 'red')
            expect(fishes[1]).toMatchObject({ id: 2, species: 'blue' })
        })
    })

    describe('Fish.insert', () => {
        it('adds a new hobbit to the table', async () => {
            await Fish.insert({ species: 'pink' })
            const rows = await db('fish')
            expect(rows).toHaveLength(5)
        })
    })
})