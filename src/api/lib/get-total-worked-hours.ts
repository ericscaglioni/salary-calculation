import { WorkedTime } from '../types'

type Params = {
  convertWorkedTime: (s: string) => WorkedTime
  timeToDecimal: (n: number) => number
}

export const getTotalWorkedHours = (
  strWorkedTime: string,
  { convertWorkedTime, timeToDecimal }: Params,
): number => {
  const { hours, minutes, seconds } = convertWorkedTime(strWorkedTime)
  const decimalSeconds = timeToDecimal(seconds)
  const decimalMinutes = timeToDecimal(minutes) + decimalSeconds
  const totalWorkedHours = hours + decimalMinutes
  return totalWorkedHours
}
