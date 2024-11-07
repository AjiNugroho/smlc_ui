'use client'
import React, { useState, useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type MeterData = {
    timestamp: string;
    powerMax: number;
    powerUsage: number;
    // current: number;
};

const PowerGrid = () => {
    const [gridData, setGridData] = useState<MeterData[]>([]);

    // Simulate real-time data updates
    useEffect(() => {
        const updateData = () => {
        const now = new Date().toLocaleTimeString();
        
        // Update grid data
        setGridData(prev => {
                const newData = [...prev, {
                timestamp: now,
                powerMax:  600,
                powerUsage: Math.random() * 300 + 100,
                // current: Math.random() * 20 + 80,
                }].slice(-20);
                return newData;
            });
        };

        // Initial update
        updateData();

        // Set interval for updates
        const interval = setInterval(updateData, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle className='font-semibold text-lg'>Power Grid Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] block">
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={gridData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="powerMax" stroke="#f7020f" name="Limit (kW)" />
                        <Line type="monotone" dataKey="powerUsage" stroke="#02aef7" name="Fleet Peak Load (kW)" />
                        {/* <Line type="monotone" dataKey="current" stroke="#ffc658" name="Current (A)" /> */}
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
    </Card>
    )
}

export default PowerGrid
