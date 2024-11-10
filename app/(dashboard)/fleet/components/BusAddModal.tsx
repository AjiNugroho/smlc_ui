'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
import { IoAddSharp } from "react-icons/io5";

interface Schedule {
  departureTime: string;
  requiredBatteryLevel: number;
  operatingDays: string[];
}

interface VehicleFormData {
  name: string;
  status: 'active' | 'inactive';
  description: string;
  depot:string;
  schedule: Schedule;
}

const DAYS = [
  { label: 'S', value: 'sunday' },
  { label: 'M', value: 'monday' },
  { label: 'T', value: 'tuesday' },
  { label: 'W', value: 'wednesday' },
  { label: 'T', value: 'thursday' },
  { label: 'F', value: 'friday' },
  { label: 'S', value: 'saturday' },
];

const BusAddModal = () => {
  const [formData, setFormData] = useState<VehicleFormData>({
    name: '',
    status: 'active',
    description: '',
    depot:'',
    schedule: {
      departureTime: '',
      requiredBatteryLevel: 80,
      operatingDays: [],
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate random ID and idTag
    const newVehicle = {
      ...formData,
      id: `v-${Math.random().toString(36).substr(2, 9)}`,
      idTag: `tag-${Math.random().toString(36).substr(2, 9)}`,
    };
    console.log('New vehicle data:', newVehicle);
    // Here you would typically handle the data submission
  };

  const handleDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      schedule: {
        ...prev.schedule,
        operatingDays: prev.schedule.operatingDays.includes(day)
          ? prev.schedule.operatingDays.filter(d => d !== day)
          : [...prev.schedule.operatingDays, day],
      },
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-4 rounded-sm"><IoAddSharp/>Add Bus</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Bus</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Bus Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    name: e.target.value
                  }))}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: 'active' | 'inactive') => 
                    setFormData(prev => ({
                      ...prev,
                      status: value
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    description: e.target.value
                  }))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="depot">Depot Location</Label>
                <Select
                  value={formData.depot}
                  onValueChange={(value) => 
                    setFormData(prev => ({
                      ...prev,
                      depot: value
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select depot location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="klcc">KLCC Central</SelectItem>
                    <SelectItem value="johor">Johot Depot</SelectItem>
                    <SelectItem value="klang">Klang Depot</SelectItem>
                    <SelectItem value="penang">Penang Depot</SelectItem>
                    <SelectItem value="kedah">Kedah Depot</SelectItem>
                    <SelectItem value="CyberJaya">CyberJaya Depot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Schedule Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Schedule Information</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="departureTime">Departure Time</Label>
                <Input
                  id="departureTime"
                  type="time"
                  value={formData.schedule.departureTime}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    schedule: {
                      ...prev.schedule,
                      departureTime: e.target.value
                    }
                  }))}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="batteryLevel">Required Battery Level (%)</Label>
                <Input
                  id="batteryLevel"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.schedule.requiredBatteryLevel}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    schedule: {
                      ...prev.schedule,
                      requiredBatteryLevel: parseInt(e.target.value)
                    }
                  }))}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Repeat Departure</Label>
                    <div className="flex gap-1">
                        {DAYS.map((day) => (
                        <Button
                            key={day.value}
                            type="button"
                            variant={formData.schedule.operatingDays.includes(day.value) ? "default" : "outline"}
                            className="w-10 h-10 p-0"
                            onClick={() => handleDayToggle(day.value)}
                        >
                            {day.label}
                        </Button>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <DialogTrigger asChild>
              <Button variant="outline" type="button">Cancel</Button>
            </DialogTrigger>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BusAddModal;