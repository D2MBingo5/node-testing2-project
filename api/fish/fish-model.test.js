const db = require('../../data/dbConfig')
const Fish = require('./fish-model')

test('proper environment for tests', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})