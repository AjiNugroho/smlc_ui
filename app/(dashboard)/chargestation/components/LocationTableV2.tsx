'use client'
import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EVCharger {
    id: number;
    name: string;
    address: string;
    state: string;
    city: string;
    status: string;
    connectors: string;
    available_conn:number;
    occupied_conn:number;

}
interface EVChargerTableProps {
    data: EVCharger[];
    itemsPerPage?: number;
}


const LocationTableV2 = ({ data}: EVChargerTableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [stateFilter, setStateFilter] = useState<string>('all');
    const itemsPerPage=5;
   

    // Get unique states for filter dropdown
    const uniqueStates = useMemo(() => {
        return Array.from(new Set(data.map(item => item.state)));
    }, [data]);

    // Filter and search data
    const filteredData = useMemo(() => {
        return data.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesState = stateFilter !=='all' ? item.state === stateFilter : true;
            return matchesSearch && matchesState;
        });
    }, [data, searchTerm, stateFilter]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    // Format status with color
    const getStatusColor = (status: string): string => {
        switch (status.toLowerCase()) {
            case 'online':
                return 'text-green-600 bg-green-100';
            case 'offline':
                return 'text-red-600 bg-red-100';
            case 'occupied':
                return 'text-yellow-600 bg-yellow-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    // Format connectors with color
    const getConnectorColor = (connectors: string): string => {
        const [active, total] = connectors.split('/').map(Number);
        if (active === total) return 'text-green-600';
        if (active === 0) return 'text-red-600';
        return 'text-yellow-600';
    };

    return (
        <div className="w-full space-y-4">
            {/* Search and Filter Controls */}
            <div className='font-semibold text-lg'>
                Charge Stations
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    placeholder="Search charger name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-xs"
                />
                <Select
                    value={stateFilter}
                    onValueChange={setStateFilter}
                >
                    <SelectTrigger className="max-w-xs">
                        <SelectValue placeholder="Filter by state" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All States</SelectItem>
                        {uniqueStates.map((state) => (
                            <SelectItem key={state} value={state}>
                                {state}
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
                            <TableHead>Name</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-center">Connectors</TableHead>
                            <TableHead className="text-center"></TableHead>
                            {/* <TableHead className="text-right">Total Amount</TableHead>
                            <TableHead className="text-right">Total Usage</TableHead>
                            <TableHead className="text-right">Total Sessions</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentData.map((charger) => (
                            <TableRow key={charger.id}>
                                <TableCell className="font-medium">{charger.name}</TableCell>
                                <TableCell>{charger.address}</TableCell>
                                <TableCell>{charger.state}</TableCell>
                                <TableCell>{charger.city}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(charger.status)}`}>
                                        {charger.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-center">
                                    <span className={getConnectorColor(charger.connectors)}>
                                        {charger.connectors}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1 max-w-24 justify-between'>
                                        <span className={`px-2 py-1 rounded-full text-sm text-yellow-600 bg-yellow-100`}>
                                            {charger.occupied_conn} occupied
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-sm text-green-600 bg-green-100`}>
                                            {charger.available_conn} available
                                        </span>

                                    </div>
                                </TableCell>
                                {/* <TableCell className="text-right">RM {formatNumber(charger.total_amount)}</TableCell>
                                <TableCell className="text-right">{formatNumber(charger.total_usage)} kWh</TableCell>
                                <TableCell className="text-right">{formatNumber(charger.total_sessions)}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                    Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} chargers
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(currentPage - 1)}
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
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LocationTableV2;