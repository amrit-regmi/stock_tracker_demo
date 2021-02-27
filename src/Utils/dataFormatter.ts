import { coordinateFormattedData, intervalLabel, timeData } from '../types'
import { getStartingPointForInterval } from './dateUtils'

/**
 * Formats the retrived raw data from api - converts date string to date int on x axis and sets opening price on y axis
 * @param timeData {Object}
 * @returns array of cordinate formatted data x-dateInt y- price double
 */
export const formatToCoordinate = (timeData:timeData ):coordinateFormattedData => {
  const data: coordinateFormattedData = []
  timeData && Object.keys(timeData).reduce( ( p, dateString) => {
    data.push({
      x : Date.parse(dateString),
      y : parseFloat(timeData[dateString]['1. open'])
    })

    return p
  })
  return data
}

/**
 * Clips the coordinate formatted data based on selected interval on graph so domain on y-axis is calculated properly
 * @param graphInterval string selected interval in graph
 * @param data {Object} coordinateformatted data
 * @returns array of cordinate formatted data x-dateInt y- price double
 */
export const clipDataBasedonInterval = (graphInterval: intervalLabel, data: coordinateFormattedData): coordinateFormattedData => {
  if(graphInterval === 'max') {
    return data
  }
  const startFromDate = getStartingPointForInterval(graphInterval).getTime()
  return data.filter(cordinateObject => cordinateObject.x >= startFromDate )
}