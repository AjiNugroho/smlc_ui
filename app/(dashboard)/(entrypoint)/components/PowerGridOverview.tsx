import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { Battery, Plug, Activity, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Types for our data
type MeterData = {
  timestamp: string;
  power: number;
  voltage: number;
  current: number;
};

type BatteryData = {
  id: number;
  charge: number;
  temperature: number;
  health: number;
};

type ConnectorData = {
  id: number;
  status: 'connected' | 'disconnected' | 'charging';
  current: number;
};

const ChargingStationDashboard = () => {
  const [gridData, setGridData] = useState<MeterData[]>([]);
  const [meterData, setMeterData] = useState<{ [key: string]: MeterData[] }>({
    meter1: [],
    meter2: [],
    meter3: [],
  });
  const [batteries, setBatteries] = useState<BatteryData[]>([]);
  const [connectors, setConnectors] = useState<ConnectorData[]>([]);
  const [totalPowerConsumption, setTotalPowerConsumption] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const [availableChargers, setAvailableChargers] = useState(0);

  // Simulate real-time data updates
  useEffect(() => {
    const updateData = () => {
      const now = new Date().toLocaleTimeString();
      
      // Update grid data
      setGridData(prev => {
        const newData = [...prev, {
          timestamp: now,
          power: Math.random() * 100 + 400,
          voltage: Math.random() * 10 + 220,
          current: Math.random() * 20 + 80,
        }].slice(-20);
        return newData;
      });

      // Update meter data
      setMeterData(prev => {
        const newData = { ...prev };
        Object.keys(newData).forEach(meter => {
          newData[meter] = [...newData[meter], {
            timestamp: now,
            power: Math.random() * 50 + 150,
            voltage: Math.random() * 5 + 220,
            current: Math.random() * 10 + 30,
          }].slice(-20);
        });
        return newData;
      });

      // Update batteries
      setBatteries([
        { id: 1, charge: Math.random() * 20 + 80, temperature: Math.random() * 10 + 25, health: 98 },
        { id: 2, charge: Math.random() * 20 + 70, temperature: Math.random() * 10 + 25, health: 95 },
        { id: 3, charge: Math.random() * 20 + 75, temperature: Math.random() * 10 + 25, health: 97 },
      ]);

      // Update connectors
      setConnectors([
        { id: 1, status: 'charging', current: Math.random() * 30 + 20 },
        { id: 2, status: 'connected', current: Math.random() * 30 + 20 },
        { id: 3, status: 'disconnected', current: 0 },
      ]);

      // Update metrics
      setTotalPowerConsumption(Math.random() * 1000 + 4000);
      setEfficiency(Math.random() * 5 + 92);
      setAvailableChargers(Math.floor(Math.random() * 2) + 1);
    };

    // Initial update
    updateData();

    // Set interval for updates
    const interval = setInterval(updateData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Charging Station Monitoring</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Power Consumption
            </CardTitle>
            <Zap className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPowerConsumption.toFixed(2)} kW</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              System Efficiency
            </CardTitle>
            <Activity className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{efficiency.toFixed(1)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available Chargers
            </CardTitle>
            <Plug className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{availableChargers}/3</div>
          </CardContent>
        </Card>
      </div>

      {/* Power Grid Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Power Grid Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={gridData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="power" stroke="#8884d8" name="Power (kW)" />
                <Line type="monotone" dataKey="voltage" stroke="#82ca9d" name="Voltage (V)" />
                <Line type="monotone" dataKey="current" stroke="#ffc658" name="Current (A)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Smart Meters */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Meters Power Consumption</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={meterData.meter1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="power" stackId="1" stroke="#8884d8" fill="#8884d8" name="Meter 1" />
                <Area type="monotone" dataKey="power" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Meter 2" />
                <Area type="monotone" dataKey="power" stackId="3" stroke="#ffc658" fill="#ffc658" name="Meter 3" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Batteries Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {batteries.map((battery) => (
          <Card key={battery.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Battery {battery.id}
              </CardTitle>
              <Battery className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>Charge: {battery.charge.toFixed(1)}%</div>
                <div>Temperature: {battery.temperature.toFixed(1)}°C</div>
                <div>Health: {battery.health}%</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Connectors Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {connectors.map((connector) => (
          <Card key={connector.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Connector {connector.id}
              </CardTitle>
              <Plug className={`h-4 w-4 ${
                connector.status === 'charging' ? 'text-green-600' :
                connector.status === 'connected' ? 'text-blue-600' :
                'text-gray-400'
              }`} />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>Status: {connector.status}</div>
                <div>Current: {connector.current.toFixed(1)} A</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChargingStationDashboard;