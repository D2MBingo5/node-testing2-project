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
    })
})