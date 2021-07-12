import { expect } from 'chai'
import { timeToDecimal } from '../../../src/api/lib';

describe('/api/lib/time-to-decimal', () => {
  it('returns zero when time is zero', () => {
    const seconds = 0
    expect(timeToDecimal(seconds)).to.eq(0)
  });

  it('converts seconds to decimal minutes', () => {
    const seconds = 30
    expect(timeToDecimal(seconds)).to.eq(0.5)
  })

  it('converts minutes to decimal hours', () => {
    const seconds = 20
    expect(timeToDecimal(seconds)).to.eq(0.3333)
  })
})
