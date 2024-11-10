'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

interface Schedule {
  departureTime: string;
  requiredBatteryLevel: number;
  operatingDays: string[];
}

interface Vehicle {
  id: string;
  idTag: string;
  name: string;
  status: 'active' | 'inactive';
  description: string;
  depot:string;
  schedule: Schedule;
}

interface EditVehicleModalProps {
  vehicle: Vehicle;
  isOpen:boolean;
  setIsOpen:(status:EditVehicleModalProps['isOpen'])=>void
  onSave: (updatedVehicle: Vehicle) => void;
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

const BusEditModal = ({ vehicle, onSave,isOpen,setIsOpen }: EditVehicleModalProps) => {
//   const [isOpen, setIsOpen] = useState(false);
    
  const [formData, setFormData] = useState<Vehicle>(vehicle);

  useEffect(() => {
    setFormData(vehicle);
  }, [vehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setIsOpen(false);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Edit2 className="h-4 w-4" />
        </Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Vehicle - {formData.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>ID</Label>
                  <Input value={formData.id} disabled />
                </div>
                <div className="grid gap-2">
                  <Label>ID Tag</Label>
                  <Input value={formData.idTag} disabled />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Vehicle Name</Label>
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
                <Label>Operating Days</Label>
                <div className="flex gap-2">
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
            <Button variant="outline" type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BusEditModal;