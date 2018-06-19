const assert = require('assert')
const B = require('../🅱️.js')

describe('🅱', function () {
  it ('should 🅱', function () {
    const original = 'Deez Nutz'
    const modified = B(original)

    for (let word of modified.split(' ')) {
      assert(word.startsWith('🅱'))
    }
  })
})
