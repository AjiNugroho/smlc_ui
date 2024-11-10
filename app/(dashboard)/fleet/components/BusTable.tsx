'use client'
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import BusAddModal from './BusAddModal';
import { ChevronLeft, ChevronRight,Trash2,PencilLine } from 'lucide-react';
import BusEditModal from './BusEditModal';

interface Schedule {
    departureTime: string;
    requiredBatteryLevel: number;
    operatingDays: string[];
}

interface Vehicle {
  id: string;
  name: string;
  idTag: string;
  status: 'active' | 'inactive';
  description: string;
  depot:string;
  schedule: Schedule;
}

const sampleSchedule:Schedule={
    departureTime:'',
    requiredBatteryLevel:80,
    operatingDays:[]
}

// Sample data
const sampleVehicles: Vehicle[] = [
  { id: "v1-abc", name: "Bus 101", idTag: "VID:2FFD341E7", status: "active", description: "Express Route Bus" ,depot:'Kedah Depot',schedule:sampleSchedule},
  { id: "v2-def", name: "Metro 202", idTag: "VID:2FFD342E8", status: "inactive", description: "City Center Shuttle",depot:'Johor Depot',schedule:sampleSchedule },
  { id: "v3-ghi", name: "Transit 303", idTag: "VID:2FFD343E9", status: "active", description: "Airport Express" ,depot:'Johor Depot',schedule:sampleSchedule},
  { id: "v4-jkl", name: "Shuttle 404", idTag: "VID:2FFD344E2", status: "active", description: "University Route" ,depot:'Klang Depot',schedule:sampleSchedule},
  { id: "v5-mno", name: "Bus 505", idTag: "VID:2FFD351E2", status: "inactive", description: "Shopping District Bus",depot:'CyberJaya Depot' ,schedule:sampleSchedule},
  { id: "v6-pqr", name: "Metro 606", idTag: "VID:2FFD352E3", status: "active", description: "Hospital Route",depot:'Penang Depot' ,schedule:sampleSchedule},
  { id: "v7-stu", name: "Transit 707", idTag: "VID:2FFD351E6", status: "active", description: "School District Bus",depot:'Johor Depot' ,schedule:sampleSchedule},
  { id: "v8-vwx", name: "Shuttle 808", idTag: "VID:2FFD351E8", status: "inactive", description: "Tourist Route",depot:'Johor Depot' ,schedule:sampleSchedule},
  { id: "v9-yza", name: "Bus 909", idTag: "VID:2FFD340E1", status: "active", description: "Night Service Bus",depot:'KLCC Central Depot',schedule:sampleSchedule},
  { id: "v10-bcd", name: "Metro 1010", idTag: "VID:2FFD340E2", status: "active", description: "Industrial Zone Shuttle",depot:'Johor Depot' ,schedule:sampleSchedule},
];

const ITEMS_PER_PAGE = 5;

const BusTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedBus,setSelectedBus]= useState<Vehicle>(sampleVehicles[0])
  const [openEdit,setOpenEdit]=useState<boolean>(false)

  const selectBus = (id:string)=>{
    const bus = sampleVehicles.find(bus => bus.id === id)
    if(bus){
        setSelectedBus(bus)
        setOpenEdit(true)
    }else{
        alert('something wrong')
    }
  }

  const saveBus = (updatedVehicle:Vehicle)=>{
    console.log(updatedVehicle)
  }

  const filteredData = useMemo(() => {
    return sampleVehicles.filter((vehicle) => {
      const matchesSearch = 
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.idTag.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || vehicle.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-4 bg-white p-4 rounded-xl">
        <BusEditModal isOpen={openEdit} setIsOpen={setOpenEdit} vehicle={selectedBus} onSave={saveBus}/>
        <div className='font-semibold text-lg'>
            Bus List
        </div>
        <div className="flex gap-4 mb-4">
            <Input
            placeholder="Search by name or ID tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
            />
            <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
            </Select>

            <div className='ms-auto me-0'>
                <BusAddModal/>
            </div>
        
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>ID Tag</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Depot Location</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell>{vehicle.id}</TableCell>
              <TableCell>{vehicle.name}</TableCell>
              <TableCell>{vehicle.idTag}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  vehicle.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {vehicle.status}
                </span>
              </TableCell>
              <TableCell>{vehicle.description}</TableCell>
              <TableCell>{vehicle.depot}</TableCell>
              <TableCell className=''>
                <div className='flex gap-1 justify-end'>
                    <Button
                    variant="default" 
                    size="sm"
                    onClick={()=>selectBus(vehicle.id)}
                    >
                        <PencilLine/>
                    </Button>
                   
                    <Button 
                    variant="destructive" 
                    size="sm"
                    >
                    <Trash2/>
                    </Button>
                   
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length} entries
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 border rounded-lg disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === page ? 'bg-[#0035a3] text-white' : 'hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 border rounded-lg disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusTable;