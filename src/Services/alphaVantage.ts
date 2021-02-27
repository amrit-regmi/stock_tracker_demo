import { DATA_INTERVAL, DATA_OUTPUTSIZE } from '../types'
const apikey = ['2YG833V60ZEZFQGC','UCFXBOEK6RAZWPF2','E361R7TWO5RY0TAK','XOGXSSZI86H29KJ6','ONQ4JRKSKZLSB42C','RNRIZOC320RX5DKN']
const  baseurl =  'https://www.alphavantage.co/query?'

/**
 * Due to limitation on Api Calls to 5 per min and 500 per day, we have used multiple API keys on Array  to maximize our usageperminute
 * Function below generates the indexnumber based on current time for the given array size. which is used to pick differnt key every time a call is made
 *   */
const randomIndex= (arraySize:number) => {
  const seconds = (new Date()).getSeconds()
  const num = seconds%arraySize
  return ( num < 0 ? seconds : num)
}

/**
 * api call returns the search resultsortedby match score
 * @returns url for symbol serach api
 * @keyword string serach keyword
 */
export const symbol_search_api =(keyword:string) : string => {
  return `${baseurl}function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apikey[randomIndex(apikey.length)]}`
}

/**
 * api returns Daily data for up to about last 20 years
 * @returns url for time seris daily api
 * @symbol company symbol
 * @outputsize compact|full - compact returns only 100 data points
 */
export const time_series_daily_api = (symbol:string, outputsize: DATA_OUTPUTSIZE) : string => {
  return `${baseurl}function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=${outputsize}&apikey=${apikey[randomIndex(apikey.length)]}`
}

/**
 * api returns the most recent 1-2 months of intraday data
 * @returns url for time seris daily api
 * @symbol company symbol
 * @outputsize compact|full - compact returns only 100 data points
 * @interval datainterval 1min, 5min, 15min, 30min, 60min
 */
export const time_series_intraday_api = (symbol:string, outputsize:DATA_OUTPUTSIZE ,interval: DATA_INTERVAL) : string => {
  return `${baseurl}function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&outputsize=${outputsize}&apikey=${apikey[randomIndex(apikey.length)]}`
}

/**
 * api returns the price and volume information
 * @returns url for time global_quote_api
 * @param symbol comany symbol
 */
export const global_quote_api =  (symbol:string) : string => {
  return `${baseurl}function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apikey[randomIndex(apikey.length)]}`
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { symbol_search_api,time_series_daily_api,time_series_intraday_api,global_quote_api }