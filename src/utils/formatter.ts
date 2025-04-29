import { BigNumber } from "bignumber.js"

export const formatNumber = (number: number | string, toFormat = 2) => {
  return new BigNumber(number).toFormat(toFormat)
}

const addZero = (m: number) => (m < 10 ? `0${m}` : m)

export const formatDate = (timestamp?: number) => {
  const time = timestamp ? new Date(timestamp) : new Date()
  const y = time.getFullYear()
  const M = time.getMonth() + 1
  const d = time.getDate()
  return `${y}-${addZero(M)}-${addZero(d)}`
}
