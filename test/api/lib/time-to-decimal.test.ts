import { expect } from 'chai'
import { totalDecimalHours } from '../../../src/api/lib';

describe('/api/lib/time-to-decimal', () => {
  it('returns zero when time is zero', () => {
    const workedTime = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
    expect(totalDecimalHours(workedTime)).to.eq(0)
  });

  it('converts when only second is provided', () => {
    const workedTime = {
      hours: 0,
      minutes: 0,
      seconds: 30,
    }
    expect(totalDecimalHours(workedTime)).to.eq(0.0083)
  })

  it('converts when only minutes is provided', () => {
    const workedTime = {
      hours: 0,
      minutes: 30,
      seconds: 0,
    }
    expect(totalDecimalHours(workedTime)).to.eq(0.5)
  })

  it('converts full worked time', () => {
    const workedTime = {
      hours: 10,
      minutes: 30,
      seconds: 30,
    }
    expect(totalDecimalHours(workedTime)).to.eq(10.5083)
  })
})
