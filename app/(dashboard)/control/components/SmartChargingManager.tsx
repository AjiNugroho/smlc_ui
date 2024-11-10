'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Zap, Battery, AlertTriangle, Power} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Types
interface ChargingProfile {
  id: string;
  name: string;
  powerRequired: number;  // in kW
  priority: number;      // 1 is highest priority
  description: string;
}

interface ChargingStation {
  id: string;
  name: string;
  currentPower: number;
  activeProfile: ChargingProfile | null;
  status: 'active' | 'idle' | 'disabled';
}

// Sample charging profiles
const CHARGING_PROFILES: ChargingProfile[] = [
  {
    id: "profile-1",
    name: "Fast Charging",
    powerRequired: 50,
    priority: 1,
    description: "Maximum power for rapid charging"
  },
  {
    id: "profile-2",
    name: "Standard Charging",
    powerRequired: 22,
    priority: 2,
    description: "Regular charging speed"
  },
  {
    id: "profile-3",
    name: "Eco Charging",
    powerRequired: 7.4,
    priority: 3,
    description: "Energy-efficient slow charging"
  },
  {
    id: "profile-4",
    name: "Minimum Power",
    powerRequired: 3.7,
    priority: 4,
    description: "Minimum viable charging power"
  }
];

// Sample charging stations
const INITIAL_STATIONS: ChargingStation[] = [
  { id: "cs-1", name: "Station 1", currentPower: 0, activeProfile: null, status: 'idle' },
  { id: "cs-2", name: "Station 2", currentPower: 0, activeProfile: null, status: 'idle' },
  { id: "cs-3", name: "Station 3", currentPower: 0, activeProfile: null, status: 'idle' }
];

const SmartChargingManager = () => {
  const [availablePower, setAvailablePower] = useState<number>(100);
  const [stations, setStations] = useState<ChargingStation[]>(INITIAL_STATIONS);
  const [alert, setAlert] = useState<string>('');

  // Function to optimize charging profiles based on available power
  const optimizeChargingProfiles = (power: number) => {
    let remainingPower = power;
    const updatedStations = [...stations];
    
    // Reset all stations first
    updatedStations.forEach(station => {
      station.activeProfile = null;
      station.currentPower = 0;
      station.status = 'idle';
    });

    // Assign profiles to active stations based on available power
    for (const station of updatedStations) {
      if (station.status !== 'disabled') {
        // Find the highest power profile that can be supported with remaining power
        const suitableProfile = CHARGING_PROFILES.find(profile => 
          profile.powerRequired <= remainingPower
        );

        if (suitableProfile) {
          station.activeProfile = suitableProfile;
          station.currentPower = suitableProfile.powerRequired;
          station.status = 'active';
          remainingPower -= suitableProfile.powerRequired;
        } else {
          station.status = 'idle';
        }
      }
    }

    setStations(updatedStations);
    
    // Set alert if power is insufficient
    if (remainingPower < 0) {
      setAlert('Warning: Insufficient power for optimal charging');
    } else {
      setAlert('');
    }
  };

  // Handle power input change
  const handlePowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPower = parseFloat(e.target.value);
    setAvailablePower(newPower);
    optimizeChargingProfiles(newPower);
  };

  // Initial optimization
  useEffect(() => {
    optimizeChargingProfiles(availablePower);
  }, []);

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Power className="h-6 w-6 text-blue-500" />
          <CardTitle>Smart Charging Station Manager</CardTitle>
        </div>
        <CardDescription>Dynamic power distribution system</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Power Input Section */}
        <div className="space-y-2">
          <Label htmlFor="power" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Available Power (kW)
          </Label>
          <Input
            id="power"
            type="number"
            value={availablePower}
            onChange={handlePowerChange}
            className="max-w-xs"
          />
        </div>

        {/* Alert Section */}
        {alert && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Power Alert</AlertTitle>
            <AlertDescription>{alert}</AlertDescription>
          </Alert>
        )}

        {/* Charging Stations Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Station</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Active Profile</TableHead>
              <TableHead>Current Power (kW)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stations.map((station) => (
              <TableRow key={station.id}>
                <TableCell className="font-medium">{station.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      station.status === 'active' ? 'default' :
                      station.status === 'idle' ? 'secondary' : 'destructive'
                    }
                  >
                    {station.status}
                  </Badge>
                </TableCell>
                <TableCell>{station.activeProfile?.name || 'None'}</TableCell>
                <TableCell>{station.currentPower}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Available Profiles Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Available Charging Profiles</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {CHARGING_PROFILES.map((profile) => (
              <Card key={profile.id} className="p-4">
                <div className="flex items-center gap-2">
                  <Battery className="h-4 w-4" />
                  <h4 className="font-semibold">{profile.name}</h4>
                </div>
                <p className="text-sm text-gray-500">{profile.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>{profile.powerRequired} kW</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartChargingManager;