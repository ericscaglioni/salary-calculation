import { expect, assert } from 'chai'
import { calculateSalary } from '../../../src/api/lib'

describe('/api/lib/calculate-salary', () => {
  it('throws error if hourly rate is not a number', () => {
    const hourlyRate = Number('invalid_number')
    assert.throws(() => calculateSalary(10, hourlyRate), 'Invalid hourly rate')
  })

  it('throws error if hourly rate is NaN', () => {
    const hourlyRate = 100 / 0
    assert.throws(() => calculateSalary(10, hourlyRate), 'Invalid hourly rate')
  })

  it('returns 0 if hourly rate is equals 0', () => {
    const response = calculateSalary(10, 0)
    expect(response).to.eq(0)
  })

  it('returns salary base on the hourly rate', () => {
    const response = calculateSalary(10, 10)
    expect(response).to.eq(100)
  })
})
