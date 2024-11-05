'use client'
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SmartMeterChart = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(chartRef.current){
            const chart = echarts.init(chartRef.current);
            const gaugeData = [
                {
                value: 90,
                name: 'Power Input',
                title: {
                    offsetCenter: ['0%', '-40%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '-20%']
                }
                },
                {
                value: 90,
                name: 'Power Output',
                title: {
                    offsetCenter: ['0%', '0%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '20%']
                }
                }
            ];

            const option:echarts.EChartsOption = {
                series: [
                {
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                    show: false
                    },
                    progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#464646'
                    }
                    },
                    axisLine: {
                    lineStyle: {
                        width: 40
                    }
                    },
                    splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                    },
                    axisTick: {
                    show: false
                    },
                    axisLabel: {
                    show: false,
                    distance: 50
                    },
                    data: gaugeData,
                    title: {
                    fontSize: 14
                    },
                    detail: {
                    width: 50,
                    height: 14,
                    fontSize: 14,
                    color: 'inherit',
                    borderColor: 'inherit',
                    borderRadius: 20,
                    borderWidth: 1,
                    formatter: '{value}%'
                    }
                }
                ]
            }; 

            chart.setOption(option);

            // Resize the chart when the window is resized
            window.addEventListener('resize', () => {
            chart.resize();
            });

            setInterval(function () {
                gaugeData[0].value = +(90+Math.random() * 10).toFixed(2);
                gaugeData[1].value = +(70+Math.random() * 10).toFixed(2);
                chart.setOption<echarts.EChartsOption>({
                  series: [
                    {
                      data: gaugeData,
                      pointer: {
                        show: false
                      }
                    }
                  ]
                });
              }, 3000);
    
          // Clean up the chart instance on component unmount
          return () => {
            chart.dispose();
            window.removeEventListener('resize', () => {
              chart.resize();
            });
          };
        }
        
    },[])
       
    return (
        <Card className='h-[450px] w-full rounded-xl shadow-lg p-4'>
            <CardHeader>
                <CardTitle className='font-semibold text-lg'>Power Utility</CardTitle>
            </CardHeader>

            <CardContent className='w-full h-full'>
                <div ref={chartRef} className='w-full h-full ' />
            </CardContent>
        </Card>
        // <div className=''>
        //     <p className='font-semibold text-lg'>Power Utility</p>
        //     <div ref={chartRef} className='w-full h-full ' />
        // </div>
    )
}

export default SmartMeterChart
