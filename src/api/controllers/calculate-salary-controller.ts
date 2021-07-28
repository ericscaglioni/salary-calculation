import { Request, Response } from 'express'
import { makeGetTotalWorkedHoursParams } from '../lib/factories'
import { getTotalWorkedHours, calculateSalary } from '../lib'

export default function handler (req: Request, res: Response) {
  try {
    const { workedTime, hourlyRate } = req.query
  
    const params = makeGetTotalWorkedHoursParams()
    const workedHours = getTotalWorkedHours(workedTime as string, params)
    const response = calculateSalary(workedHours, Number(hourlyRate))
    res.status(200).json({
      totalHours: workedHours,
      salary: response,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    })
  }
}
