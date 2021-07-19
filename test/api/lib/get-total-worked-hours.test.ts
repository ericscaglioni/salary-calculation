import chai, { expect, assert } from 'chai'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import { getTotalWorkedHours } from '../../../src/api/lib'

chai.use(sinonChai)

const emptyWorkedObj = () => ({
  hours: 0,
  minutes: 0,
  seconds: 0,
})

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
      timeToDecimal: sinon.stub(),
    }), 'any_error')
  })

  it('calls convertWorkedTime with correct data', () => {
    const convertWorkedTimeStub = sinon.stub().returns(fakeWorkedObj())
    getTotalWorkedHours(validWorkedTime, {
      convertWorkedTime: convertWorkedTimeStub,
      timeToDecimal: sinon.stub(),
    })
    expect(convertWorkedTimeStub).to.have.been.calledWith(validWorkedTime)
  })

  it('calls timeToDecimal with correct data', () => {
    const convertWorkedTimeSpy = sinon.stub().returns(fakeWorkedObj())
    const timeToDecimalSpy = sinon.stub()
    getTotalWorkedHours(validWorkedTime, {
      convertWorkedTime: convertWorkedTimeSpy,
      timeToDecimal: timeToDecimalSpy,
    })
    expect(timeToDecimalSpy).to.have.been.calledWith(0)
    expect(timeToDecimalSpy).to.have.been.calledWith(34)
  })

  it('returns total of worked hour', () => {
    const convertWorkedTimeSpy = sinon.stub().returns(fakeWorkedObj())
    const timeToDecimalSpy = sinon.stub()
      .onCall(0).returns(0)
      .onCall(1).returns(0.5667)
    const workedHours = getTotalWorkedHours(validWorkedTime, {
      convertWorkedTime: convertWorkedTimeSpy,
      timeToDecimal: timeToDecimalSpy,
    })
    expect(workedHours).to.eq(188.5667)
  })
})
