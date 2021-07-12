import { expect } from 'chai'
import { convertWorkedTime } from '../../../src/api/lib'

const initialWorkedTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

describe('/api/lib/convert-worked-time', () => {
  it('returns zeroed worked time when an invalid argument is provided', () => {
    const workedTime = 'invalid_worked_time'
    expect(convertWorkedTime(workedTime)).deep.eq(initialWorkedTime)
  })

  it('returns zeroed worked time when time provided is invalid', () => {
    const workedTime = '25:65:62'
    expect(convertWorkedTime(workedTime)).deep.eq(initialWorkedTime)
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
