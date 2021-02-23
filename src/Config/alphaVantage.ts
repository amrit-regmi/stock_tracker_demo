export const  alphaVantage = {
  apiKey :'UCFXBOEK6RAZWPF2',
  baseurl: 'https://www.alphavantage.co/query?',
  function: {
    SYMBOL_SEARCH:  'SYMBOL_SEARCH' ,
    TIME_SERIES_DAILY_ADJUSTED: 'TIME_SERIES_DAILY_ADJUSTED',
    TIME_SERIES_INTRADAY:'TIME_SERIES_INTRADAY'
  }
}
export type DATA_INTERVAL = '1min'| '5min' | '15min' | '30min' | '60min'
export type DATA_OUTPUTSIZE = 'compact' | 'full'