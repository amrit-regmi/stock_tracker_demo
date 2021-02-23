import React, { FC, useLayoutEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import { companydata } from "../../Utils/dataFormatter";

export const useWindowSize = ():number[] => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
 
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const TimeLine:FC<{data:companydata[] }> = ({data}) => {
  const [width, height] = useWindowSize();
  return (
    <LineChart height={height} width={width} data={data}>
    <CartesianGrid height={height} width={width} vertical={false} />
    <XAxis dataKey="x" />
    <YAxis axisLine={false} tickLine={false} allowDataOverflow={true} />
    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
    <Legend />
     {data.map( company => 
       <Line type="linear" dataKey="y" stroke="#8884d8" dot={false}  data={company.data} name={company.company} key={company.company} />
     )}
    
  </LineChart>
  )
}

export default TimeLine