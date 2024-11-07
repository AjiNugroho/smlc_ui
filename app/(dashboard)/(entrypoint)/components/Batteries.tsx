'use client'
import React, { useState, useEffect } from 'react';
import { Battery} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


type BatteryData = {
    id: number;
    charge: number;
    temperature: number;
    health: number;
};

const Batteries = () => {
    

    const [batteries, setBatteries] = useState<BatteryData[]>([]);

    // Simulate real-time data updates
  useEffect(() => {
    const updateData = () => {
      setBatteries([
        { id: 1, charge: Math.random() * 20 + 80, temperature: Math.random() * 10 + 25, health: 98 },
        { id: 2, charge: Math.random() * 20 + 70, temperature: Math.random() * 10 + 25, health: 95 }
      ]);
    };

    // Initial update
    updateData();

    // Set interval for updates
    const interval = setInterval(updateData, 5000);

    return () => clearInterval(interval);
  }, []);
    return (
        <div className="grid grid-row-1">
        {batteries.map((battery) => (
          <Card key={battery.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">
                Battery {battery.id}
              </CardTitle>
              <Battery className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className='py-4 bg-green-200/50 flex justify-center rounded-lg'>Charge: {battery.charge.toFixed(1)}%</div>
                <div className='py-4 bg-green-200/50 flex justify-center rounded-lg'>Temp: {battery.temperature.toFixed(1)}°C</div>
                <div className='py-4 bg-green-200/50 flex justify-center rounded-lg'>Health: {battery.health}%</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
}

export default Batteries
