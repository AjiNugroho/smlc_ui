'use client'
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const BatteryMonitor = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(chartRef.current){
            const chart = echarts.init(chartRef.current);

            const option:echarts.EChartsOption = {
                series: [
                  {
                    type: 'gauge',
                    center: ['50%', '60%'],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 100,
                    itemStyle: {
                      color: '#FFAB91'
                    },
                    progress: {
                      show: true,
                      width: 20
                    },
              
                    pointer: {
                      show: false
                    },
                    axisLine: {
                      lineStyle: {
                        width: 20
                      }
                    },
                    axisTick: {
                      distance: -45,
                      splitNumber: 15,
                      lineStyle: {
                        width: 2,
                        color: '#999'
                      }
                    },
                    splitLine: {
                      distance: -52,
                      length: 14,
                      lineStyle: {
                        width: 3,
                        color: '#999'
                      }
                    },
                    axisLabel: {
                      distance: -20,
                      color: '#999',
                      fontSize: 20
                    },
                    anchor: {
                      show: false
                    },
                    title: {
                      show: false
                    },
                    detail: {
                      valueAnimation: true,
                      width: '60%',
                      lineHeight: 10,
                      borderRadius: 8,
                      offsetCenter: [0, '-15%'],
                      fontSize: 30,
                      fontWeight: 'lighter',
                      formatter: '{value} °C',
                      color: 'inherit'
                    },
                    data: [
                      {
                        value: 60
                      }
                    ]
                  }
                ]
            };
            chart.setOption(option);

            window.addEventListener('resize', () => {
                chart.resize();
            });

            setInterval(function () {
                const random = +(60+Math.random() * 3).toFixed(2);
                chart.setOption<echarts.EChartsOption>({
                  series: [
                    {
                      data: [
                        {
                          value: random
                        }
                      ]
                    }
                  ]
                });
              }, 5000);

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
            <CardTitle className='font-semibold text-lg'>Battery Temperature</CardTitle>
        </CardHeader>
        <CardContent className='w-full h-full'>
            <div ref={chartRef} className='w-full h-full ' />
        </CardContent>
    </Card>
  )
}

export default BatteryMonitor
