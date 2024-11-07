'use client'
import React, { useState } from 'react';
import { 
  Card,
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Trash2, Edit, Plus } from 'lucide-react';

// Types based on OCPP 1.6
interface ChargingProfile {
  id: number;
  stackLevel: number;
  chargingProfilePurpose: 'ChargePointMaxProfile' | 'TxDefaultProfile' | 'TxProfile';
  chargingProfileKind: 'Absolute' | 'Recurring' | 'Relative';
  recurrencyKind?: 'Daily' | 'Weekly';
  validFrom?: string;
  validTo?: string;
  chargingSchedule: {
    duration?: number;
    startSchedule?: string;
    chargingRateUnit: 'A' | 'W';
    minChargingRate?: number;
    chargingSchedulePeriod: Array<{
      startPeriod: number;
      limit: number;
      numberPhases?: number;
    }>;
  };
}

const chargingProfiles: ChargingProfile[] = [
  {
    id: 1,
    stackLevel: 1,
    chargingProfilePurpose: 'ChargePointMaxProfile',
    chargingProfileKind: 'Absolute',
    validFrom: '2024-11-01T00:00:00Z',
    validTo: '2024-12-01T23:59:59Z',
    chargingSchedule: {
      duration: 7200, // 2 hours in seconds
      startSchedule: '2024-11-07T08:00:00Z',
      chargingRateUnit: 'A',
      minChargingRate: 15,
      chargingSchedulePeriod: [
        { startPeriod: 0, limit: 25, numberPhases: 3 },
        { startPeriod: 3600, limit: 20 }, // after 1 hour
      ],
    },
  },
  {
    id: 2,
    stackLevel: 2,
    chargingProfilePurpose: 'TxDefaultProfile',
    chargingProfileKind: 'Relative',
    validFrom: '2024-11-07T00:00:00Z',
    chargingSchedule: {
      startSchedule: '2024-11-07T09:30:00Z',
      chargingRateUnit: 'W',
      chargingSchedulePeriod: [
        { startPeriod: 0, limit: 30 },
        { startPeriod: 1800, limit: 25, numberPhases: 2 },
      ],
    },
  },
  {
    id: 3,
    stackLevel: 3,
    chargingProfilePurpose: 'TxProfile',
    chargingProfileKind: 'Recurring',
    recurrencyKind: 'Daily',
    validFrom: '2024-11-07T10:00:00Z',
    validTo: '2024-11-14T10:00:00Z',
    chargingSchedule: {
      duration: 5400, // 1.5 hours
      startSchedule: '2024-11-07T10:00:00Z',
      chargingRateUnit: 'A',
      minChargingRate: 5,
      chargingSchedulePeriod: [
        { startPeriod: 0, limit: 20, numberPhases: 1 },
        { startPeriod: 3600, limit: 15 }, // 1 hour in
      ],
    },
  },
  {
    id: 4,
    stackLevel: 4,
    chargingProfilePurpose: 'TxDefaultProfile',
    chargingProfileKind: 'Recurring',
    recurrencyKind: 'Weekly',
    validFrom: '2024-11-01T00:00:00Z',
    validTo: '2024-12-31T23:59:59Z',
    chargingSchedule: {
      duration: 10800, // 3 hours
      startSchedule: '2024-11-07T06:00:00Z',
      chargingRateUnit: 'W',
      minChargingRate: 12,
      chargingSchedulePeriod: [
        { startPeriod: 0, limit: 40, numberPhases: 3 },
        { startPeriod: 5400, limit: 35 }, // after 1.5 hours
      ],
    },
  },
];


const ChargingProfileManager = () => {
  const [profiles, setProfiles] = useState<ChargingProfile[]>(chargingProfiles);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<ChargingProfile | null>(null);

  const defaultProfile: ChargingProfile = {
    id: Math.floor(Math.random()*10000),
    stackLevel: 0,
    chargingProfilePurpose: 'ChargePointMaxProfile',
    chargingProfileKind: 'Absolute',
    chargingSchedule: {
      chargingRateUnit: 'A',
      chargingSchedulePeriod: [
        {
          startPeriod: 0,
          limit: 16
        }
      ]
    }
  };

  const handleCreate = () => {
    setEditingProfile(defaultProfile);
    setIsDialogOpen(true);
  };

  const handleEdit = (profile: ChargingProfile) => {
    setEditingProfile(profile);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  const handleSave = (profile: ChargingProfile) => {
    if (editingProfile) {
      setProfiles(profiles.map(p => 
        p.id === profile.id ? profile : p
      ));
    } else {
      console.log('heheheh')
      setProfiles([...profiles, profile]);

    }
    setIsDialogOpen(false);
    setEditingProfile(null);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Charging Profiles</CardTitle>
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" />
            Add Profile
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Kind</TableHead>
                <TableHead>Stack Level</TableHead>
                <TableHead>Rate Unit</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profiles.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell>{profile.id}</TableCell>
                  <TableCell>{profile.chargingProfilePurpose}</TableCell>
                  <TableCell>{profile.chargingProfileKind}</TableCell>
                  <TableCell>{profile.stackLevel}</TableCell>
                  <TableCell>{profile.chargingSchedule.chargingRateUnit}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => handleEdit(profile)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDelete(profile.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>
              {editingProfile ? 'Edit Charging Profile' : 'Create Charging Profile'}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <FormItem>
                <FormLabel>Stack Level</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    value={editingProfile?.stackLevel} 
                    onChange={(e) => setEditingProfile(prev => ({
                      ...prev!,
                      stackLevel: parseInt(e.target.value)
                    }))}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Profile Purpose</FormLabel>
                <Select 
                  value={editingProfile?.chargingProfilePurpose}
                  onValueChange={(value: ChargingProfile['chargingProfilePurpose']) => 
                    setEditingProfile(prev => ({
                      ...prev!,
                      chargingProfilePurpose: value
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ChargePointMaxProfile">ChargePointMaxProfile</SelectItem>
                    <SelectItem value="TxDefaultProfile">TxDefaultProfile</SelectItem>
                    <SelectItem value="TxProfile">TxProfile</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormItem>
                <FormLabel>Profile Kind</FormLabel>
                <Select 
                  value={editingProfile?.chargingProfileKind}
                  onValueChange={(value: ChargingProfile['chargingProfileKind']) => 
                    setEditingProfile(prev => ({
                      ...prev!,
                      chargingProfileKind: value
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select kind" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Absolute">Absolute</SelectItem>
                    <SelectItem value="Recurring">Recurring</SelectItem>
                    <SelectItem value="Relative">Relative</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>

              <FormItem>
                <FormLabel>Charging Rate Unit</FormLabel>
                <Select 
                  value={editingProfile?.chargingSchedule.chargingRateUnit}
                  onValueChange={(value: 'A' | 'W') => 
                    setEditingProfile(prev => ({
                      ...prev!,
                      chargingSchedule: {
                        ...prev!.chargingSchedule,
                        chargingRateUnit: value
                      }
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Amperes (A)</SelectItem>
                    <SelectItem value="W">Watts (W)</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            </div>

            <div className="mt-4">
              <Button onClick={() => editingProfile && handleSave(editingProfile)}>
                Save Profile
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChargingProfileManager;