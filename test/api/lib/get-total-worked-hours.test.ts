import chai, { expect, assert } from 'chai'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import { getTotalWorkedHours } from '../../../src/api/lib'

chai.use(sinonChai)

const fakeWorkedObj = () => ({
  hours: 188,
  minutes: 34,
  seconds: 0,
})

const validWorkedTime = 'any_valid_worked_time'

describe('/api/lib/get-total-worked-hours', () => {
  it('throws if convertWorkedTime throws', () => {
    const convertWorkedTimeStub = sinon.stub().throws(new Error('any_error'))
    assert.throws(() => getTotalWorkedHours(validWorkedTime, {
      convertWorkedTime: convertWorkedTimeStub,
      totalDecimalHours: sinon.stub(),
    }), 'any_error')
  })

  it('calls convertWorkedTime with correct data', () => {
    const convertWorkedTimeStub = sinon.stub().returns(fakeWorkedObj())
    getTotalWorkedHours(validWorkedTime, {
      convertWorkedTime: convertWorkedTimeStub,
      totalDecimalHours: sinon.stub(),
    })
    expect(convertWorkedTimeStub).to.have.been.calledWith(validWorkedTime)
  })

  it('calls totalDecimalHours with correct data', () => {
    const convertWorkedTimeSpy = sinon.stub().returns(fakeWorkedObj())
    const totalDecimalHoursSpy = sinon.stub()
    getTotalWorkedHours(validWorkedTime, {
      convertWorkedTime: convertWorkedTimeSpy,
      totalDecimalHours: totalDecimalHoursSpy,
    })
    expect(totalDecimalHoursSpy).to.have.been.calledWith({ hours: 188, minutes: 34, seconds: 0 })
  })

  it('returns total of worked hour', () => {
    const convertWorkedTimeSpy = sinon.stub().returns(fakeWorkedObj())
    const totalDecimalHoursSpy = sinon.stub()
      .returns(10)
    const workedHours = getTotalWorkedHours(validWorkedTime, {
      convertWorkedTime: convertWorkedTimeSpy,
      totalDecimalHours: totalDecimalHoursSpy,
    })
    expect(workedHours).to.eq(10)
  })
})
