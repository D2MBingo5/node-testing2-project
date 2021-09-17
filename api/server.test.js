const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('./server')

test('sanity check / temp test', () => {
    expect(true).not.toBe(false)
})