import { convertWorkedTime } from '../convert-worked-time'
import { totalDecimalHours } from '../time-to-decimal'

export const makeGetTotalWorkedHoursParams = () => ({
  convertWorkedTime,
  totalDecimalHours,
})
