import { WORK_TIME_REGEX } from '../constants'
import { WorkedTime } from '../types'

const initialWorkedTime: WorkedTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

const isValidWorkedTime = (workedTime: string): boolean => WORK_TIME_REGEX.test(workedTime)

export const convertWorkedTime = (workedTime: string): WorkedTime => {
  if (!isValidWorkedTime(workedTime)) return initialWorkedTime

  const [hours, minutes, seconds] = workedTime.split(':')
  return {
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  }
}
