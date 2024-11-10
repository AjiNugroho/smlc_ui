'use client'
import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Search } from 'lucide-react';

// Types
type SessionStatus = "active" | "pending" | "cancelled" | "completed";

interface ChargingSession {
  session_id: string;
  depot_id: number;
  depot_name: string;
  user_id: string;
  idTag: string;
  total_usage: string;
  total_duration: string;
  session_start: Date;
  session_end: Date;
  session_status: SessionStatus;
}

interface SortConfig {
  key: keyof ChargingSession;
  direction: 'asc' | 'desc';
}

// Generate dummy data
const generateDummyData = (): ChargingSession[] => {
  const statuses: SessionStatus[] = ["completed", "active", "pending", "cancelled"];
  const depotNames = ["KLCC Depot", "Pavilion Depot", "Sunway Depot", "Mid Valley Depot", "KL Sentral Depot"];
  
  return Array.from({ length: 15 }, (_, index) => ({
    session_id: `SESSION${String(index + 1).padStart(4, '0')}`,
    depot_id: Math.floor(Math.random() * 5) + 1,
    depot_name: depotNames[Math.floor(Math.random() * depotNames.length)],
    user_id: `USER${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
    idTag: `${Math.random().toString(36).substring(2,7)}`,
    total_usage: `${String(Math.floor(Math.random() * 10000)).padStart(4, '0')} kWh`,
    total_duration: `${Math.floor(Math.random() * 120)} min`,
    session_start: new Date(2024, 0, 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)),
    session_end: new Date(2024, 0, 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)),
    session_status: statuses[Math.floor(Math.random() * statuses.length)]
  }));
};

const ChargingSessionTable = () => {
  const [data] = useState<ChargingSession[]>(generateDummyData());
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'session_id', direction: 'asc' });
  const [statusFilter, setStatusFilter] = useState<SessionStatus | ''>('');

  const itemsPerPage = 5;

  // Sorting function
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  // Filtering function
  const filteredData = useMemo(() => {
    return sortedData.filter(item => {
      const matchesSearch = 
        item.depot_id.toString().includes(searchTerm) ||
        item.idTag.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = 
        !statusFilter || item.session_status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [sortedData, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: keyof ChargingSession) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getStatusColor = (status: SessionStatus) => {
    const colors = {
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      active: 'bg-yellow-100 text-yellow-800',
      pending: 'bg-gray-100 text-gray-800'
    };
    return colors[status];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Charging Sessions</h1>
      
      {/* Search and Filter Controls */}
      <div className="mb-4 flex gap-4 w-1/3 ">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by depot ID or user name..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as SessionStatus | '')}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(data[0] || {}).map((key) => (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-600 cursor-pointer"
                  onClick={() => handleSort(key as keyof ChargingSession)}
                >
                  <div className="flex items-center gap-2">
                    {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    {sortConfig.key === key && (
                      sortConfig.direction === 'asc' ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
              ))}
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((session) => (
              <tr key={session.session_id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{session.session_id}</td>
                <td className="px-6 py-4 text-sm">{session.depot_id}</td>
                <td className="px-6 py-4 text-sm">{session.depot_name}</td>
                <td className="px-6 py-4 text-sm">{session.user_id}</td>
                <td className="px-6 py-4 text-sm">{session.idTag}</td>
                <td className="px-6 py-4 text-sm">{session.total_usage}</td>
                <td className="px-6 py-4 text-sm">{session.total_duration}</td>
                <td className="px-6 py-4 text-sm">{formatDate(session.session_start)}</td>
                <td className="px-6 py-4 text-sm">{formatDate(session.session_end)}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.session_status)}`}>
                    {session.session_status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => console.log('button hit', session.session_id)}
                    className="px-4 py-2 bg-[#0035a3] text-white rounded-lg hover:bg-blue-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
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

export default ChargingSessionTable;