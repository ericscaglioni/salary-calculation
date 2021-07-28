export const calculateSalary = (decimalWorkedTime: number, hourlyRate: number): number => {
  if (!isFinite(hourlyRate)) throw new Error('Invalid hourly rate')
  return Number((decimalWorkedTime * hourlyRate).toFixed(2))
}
