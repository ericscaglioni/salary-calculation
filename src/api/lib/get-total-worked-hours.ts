import { WorkedTime } from '../types'

type Params = {
  convertWorkedTime: (s: string) => WorkedTime
  totalDecimalHours: (wt: WorkedTime) => number
}

export const getTotalWorkedHours = (
  strWorkedTime: string,
  { convertWorkedTime, totalDecimalHours }: Params,
): number => {
  const workedTime = convertWorkedTime(strWorkedTime)
  return totalDecimalHours(workedTime)
}
