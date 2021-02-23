import React, {FC, useEffect, useState} from 'react';
import './App.css';
import TimeLine from './Components/Chart/TimeLine';
import { getDailyData } from './Services/service';
import { companydata, coordinateFormattedData, formatToCoordinate} from './Utils/dataFormatter';



const App:FC = () =>  {
  const [data,setData] = useState<companydata[]>([])
  useEffect(( () => {
    const callGetDailyData =  async () => {
      const responseData =  await getDailyData('TSLA','60min',1)
      if(responseData) {
        const companyData = formatToCoordinate( responseData['Time Series (60min)'] ,'TSLA')
        setData([...data,companyData])
      }
    }
    callGetDailyData()
  }),[])

  console.log(data)

  return (
    <TimeLine data= {data}></TimeLine>
  )
}

export default App;
