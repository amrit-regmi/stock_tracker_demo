import axios from 'axios'
import  { alphaVantage, DATA_INTERVAL } from '../Config/alphaVantage'
//import { rawData } from '../Utils/dataFormatter'

export const getDailyData = async (symbol: string, interval: DATA_INTERVAL ,history: number ): Promise<any >=> {
  const response =  await axios.get(alphaVantage.baseurl,{
    params:{
      function: alphaVantage.function.TIME_SERIES_INTRADAY,
      symbol: symbol,
      interval: interval,
      apikey: alphaVantage.apiKey
    }
  })

  const data  =  response.data
  
  return data
}