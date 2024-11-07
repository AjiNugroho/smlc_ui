'use client'
import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IoStopSharp } from "react-icons/io5";

// Define the minimum required properties for data items
interface DataItem {
  id: string|number ;
  name: string;
  status: string;
  [key: string]: string|number; // Allow for additional dynamic properties
}

interface DynamicTableProps {
  data: DataItem[];
  itemsPerPage?: number;
  rename?:string;
  title?:string;
  action?:boolean;
}

const DynamicTable = ({ data, itemsPerPage = 5, rename='', title='Data table',action=false }: DynamicTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Get unique statuses for filter dropdown
  const uniqueStatuses = useMemo(() => {
    const statuses = new Set(data.map(item => item.status));
    return Array.from(statuses);
  }, [data]);

  // Get column headers dynamically from the first data item
  const columns = useMemo(() => {
    if (data.length === 0) return [];
    return Object.keys(data[0]);
  }, [data]);

  // Filter and search data
  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter!=='all' ? item.status === statusFilter : true;
      return matchesSearch && matchesStatus;
    });
  }, [data, searchTerm, statusFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
        case 'available':
            return 'text-green-600 bg-green-100';
        case 'active':
            return 'text-green-600 bg-green-100';
        case 'occupied':
            return 'text-yellow-600 bg-yellow-100';
        default:
            return 'text-gray-600 bg-gray-100';
    }
};

  return (
    <div className="w-full space-y-4">
        <div className='font-semibold text-lg'>
            {title}
        </div>
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <Select
          value={statusFilter}
          onValueChange={setStatusFilter}
        >
          <SelectTrigger className="max-w-xs">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {uniqueStatuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => {
                if(column==='name'&&rename){
                    return(
                        <TableHead key={'name'} className="capitalize">
                          {rename}
                        </TableHead>
                      )
                }
                if(column==='action' && action){
                    return(
                        <TableHead key={'action'} className="capitalize">
                          
                        </TableHead>
                      )
                }
                return(
                <TableHead key={column} className="capitalize">
                  {column}
                </TableHead>
              )})}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                {columns.map((column) => {
                    
                    if(column==='status'){
                        return(
                        <TableCell key={`${item.id}-${column}`}>
                            <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(item['status'])}`}>
                            {item['status']}
                            </span>
                        </TableCell>
                        )
                    }

                    if(column==='action' && action){
                        return(
                            <TableHead key={'action'} className="capitalize">
                                <Button className='text-red-500' variant='outline'><IoStopSharp/> stop</Button>
                                
                            </TableHead>
                          )
                    }
                    return(
                        <TableCell key={`${item.id}-${column}`}>
                            {item[column]}
                        </TableCell>
                        )
                }
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} results
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;