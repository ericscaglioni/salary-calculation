import { WorkedTime } from '../types';

export const totalDecimalHours = ({ hours, minutes, seconds }: WorkedTime): number => {
  const totalHours = hours + (minutes / 60) + (seconds / 3600)
  return Number(totalHours.toFixed(4));
}
