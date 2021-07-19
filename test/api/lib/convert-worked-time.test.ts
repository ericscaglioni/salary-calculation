import { expect, assert } from 'chai'
import { convertWorkedTime } from '../../../src/api/lib'

describe('/api/lib/convert-worked-time', () => {
  it('throws when an invalid string is provided', () => {
    const workedTime = 'invalid_worked_time'
    assert.throw(() => convertWorkedTime(workedTime), 'Invalid worked time')
  })

  it('throws when time provided is invalid', () => {
    const workedTime = '25:65:62'
    assert.throw(() => convertWorkedTime(workedTime), 'Invalid worked time')
  })

  it('returns object on success', () => {
    const workedTime = '120:55:00'
    const response = convertWorkedTime(workedTime)
    expect(response).deep.eq({
      hours: 120,
      minutes: 55,
      seconds: 0,
    })
  })
})
