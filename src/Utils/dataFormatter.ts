export type coordinateFormattedData = {
  x: number | 0,
  y: number | 0
}[]

export type companydata = {
  company: string,
  data: coordinateFormattedData
}

export  type timeData = {
  [date in string]: {
    ['1. open']: string
  } 
}

export const formatToCoordinate = (timeData:timeData ,company: string ):companydata => {
   const data = timeData && Object.keys(timeData).map( dateString => {
      return {
          x : Date.parse(dateString),
          y : parseFloat(timeData[dateString]['1. open'])
      }
    })
    return { company, data }
}