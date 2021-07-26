import { Request, Response } from 'express'
import { makeGetTotalWorkedHoursParams } from '../lib/factories'
import { getTotalWorkedHours } from '../lib'

export default function handler (req: Request, res: Response) {
  const { workedTime } = req.query

  const params = makeGetTotalWorkedHoursParams()
  const response = getTotalWorkedHours(workedTime as string, params)
  res.status(200).json({
    workedHours: response,
  })
}
