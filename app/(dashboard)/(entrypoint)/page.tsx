import React from 'react'
import CardsComponent from './components/CardsComponent'
import ChartWire1 from './components/ChartWire1'
// import Chart1 from './components/chart1'
// import Chart2 from './components/chart2'
// import Chart3 from './components/chart3'
// import Chart4 from './components/chart4'
// import Chart5 from './components/chart5'
// import Chart6 from './components/chart6'
// import Chart7 from './components/chart7'

const page = () => {
  return (
    <div className='w-full flex flex-col gap-8'>
      <CardsComponent/>
      <ChartWire1/>
      {/* <Chart2/>
      <Chart3/>
      <Chart5/>
      <Chart6/>
      <Chart7/>
      <Chart4/> */}
    </div>
  )
}

export default page
