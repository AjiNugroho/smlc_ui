'use client'
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from 'lucide-react';

type MeterData = {
  timestamp: string;
  power: number;
  voltage: number;
  current: number;
};

const PowerConsumption = () => {
  const [meterData, setMeterData] = useState<{ [key: string]: MeterData[] }>({
    meter1: [],
    meter2: [],
    meter3: [],
  });

  useEffect(() => {
    const updateData = () => {
      const now = new Date().toLocaleTimeString();
      setMeterData(prev => {
        const newData = { ...prev };
        Object.keys(newData).forEach(meter => {
          newData[meter] = [...newData[meter], {
            timestamp: now,
            power: Math.floor((Math.random() * 50)) + 150,
            voltage: Math.floor(Math.random() * 5) + 220,
            current: Math.floor(Math.random() * 10) + 30,
          }].slice(-20);
        });
        return newData;
      });
    };

    updateData();
    const interval = setInterval(updateData, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalPower = Object.values(meterData).reduce((acc, data) => {
    return acc + data.reduce((sum, reading) => sum + reading.power, 0);
  }, 0);
  const pieData = Object.keys(meterData).map((meter) => ({
    name: `Meter ${meter.slice(-1)}`,
    value: meterData[meter].reduce((sum, reading) => sum + reading.power, 0),
    color: `hsl(${Number(meter.slice(-1)) * 60}, 70%, 50%)`,
  }));

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className='font-semibold text-lg'>Power Consumption</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginTop: '8px',
                }}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-end mt-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-blue-600" />
            <div className="text-sm font-medium">{totalPower.toFixed(2)} kW</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PowerConsumption;