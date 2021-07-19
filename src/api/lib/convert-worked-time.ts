import { WORK_TIME_REGEX } from '../constants'
import { WorkedTime } from '../types'

const isValidWorkedTime = (workedTime: string): boolean => WORK_TIME_REGEX.test(workedTime)

export const convertWorkedTime = (workedTime: string): WorkedTime => {
  if (!isValidWorkedTime(workedTime)) throw new Error('Invalid worked time')

  const [hours, minutes, seconds] = workedTime.split(':')
  return {
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  }
}
