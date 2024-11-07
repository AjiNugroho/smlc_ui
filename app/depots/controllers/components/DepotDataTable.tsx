'use client'
import React, { useState, useMemo } from 'react';
// import { useRouter } from 'next/router';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal
} from 'lucide-react';
import Link from 'next/link';

interface Depot {
  id: number;
  name: string;
  address: string;
  state: string;
  latitude: number;
  longitude: number;
  charger: number;
  connector: string;
  sessions: number;
}

interface SortConfig {
  key: keyof Depot;
  direction: 'asc' | 'desc';
}

const DepotDataTable = () => {
  // const router = useRouter();
  const [data] = useState<Depot[]>([
    {
      id: 1,
      name: 'KLCC central depot',
      address: 'KLCC, 156 Ampang Road, Bukit Bintang',
      state: 'Kuala Lumpur',
      latitude: 3.1592469,
      longitude: 101.7133662,
      charger: 50,
      connector: '5/25',
      sessions: 20
    },
    {
        id: 2,
        name: 'Selangor Depot',
        address: 'Jalan Mivo 1, Sungai Buloh, Selangor, Malaysia',
        state: 'Selangor',
        latitude: 3.2090206,
        longitude: 101.6050515,
        charger: 30,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 3,
        name: 'Johor Depot',
        address: 'Pagoh, Johor, Malaysia',
        state: 'Johor',
        latitude:2.149223,
        longitude: 102.7721509,
        charger: 40,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 4,
        name: 'Kedah Depot',
        address: 'Jalan A7, Kulim Hi-tech Park, Kulim, Kedah, Malaysia',
        state: 'Kedah',
        latitude: 5.442551,
        longitude: 100.563079,
        charger: 30,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 5,
        name: 'Penang Depot',
        address: 'Paya Terubong, Air Itam, Penang, Malaysia',
        state: 'Penang',
        latitude: 5.373954,
        longitude: 100.2777908,
        charger: 45,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 6,
        name: 'KLANG Depot',
        address: 'Lorong Perbandaran, Kawasan 1, Klang, Selangor, Malaysia',
        state: 'Selangor',
        latitude: 3.0446972,
        longitude: 101.4435381,
        charger: 60,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 7,
        name: 'Cyberjaya Depot',
        address: 'Persiaran Multimedia, Cyber 7, 63000 Cyberjaya',
        state: 'Cyberjaya',
        latitude: 2.9212264,
        longitude: 101.6493963,
        charger: 35,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 8,
        name: 'Ipoh Depot',
        address: '1, Jalan Tun Sambanthan, 30000 Ipoh',
        state: 'Ipoh',
        latitude: 4.5979659,
        longitude: 101.0762293,
        charger: 25,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 9,
        name: 'Seremban Depot',
        address: 'Lebuhraya Kuala Lumpur - Seremban, Kuala Lumpur',
        state: 'Kuala Lumpur',
        latitude: 3.0765802,
        longitude: 101.7029419,
        charger: 35,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 10,
        name: 'Petronas Depot',
        address: 'Petronas Sungai Perak Southbound, 33000 Perak',
        state: 'Perak',
        latitude: 4.7137003,
        longitude: 100.9447991,
        charger: 60,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 11,
        name: 'Melaka Depot',
        address: 'Jalan Bendahara, 75100 Melaka',
        state: 'Melaka',
        latitude: 2.1991297,
        longitude: 102.252341,
        charger: 40,
        connector: '5/25',
        sessions: 20
    },
    {
        id: 12,
        name: 'EVC Depot',
        address: 'EVC Headqurters Office',
        state: 'Selangor',
        latitude: 3.2083304,
        longitude: 101.304146,
        charger: 50,
        connector: '5/25',
        sessions: 20
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'id', direction: 'asc' });
  const [filters, setFilters] = useState({
    state: '',
    minCharger: '',
    maxCharger: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 7;

  // Sorting function
  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  // Filtering function
  const filteredData = useMemo(() => {
    return sortedData.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.state.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStateFilter = 
        !filters.state || item.state.toLowerCase() === filters.state.toLowerCase();

      const matchesChargerFilter = 
        (!filters.minCharger || item.charger >= parseInt(filters.minCharger)) &&
        (!filters.maxCharger || item.charger <= parseInt(filters.maxCharger));

      return matchesSearch && matchesStateFilter && matchesChargerFilter;
    });
  }, [sortedData, searchTerm, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: keyof Depot) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // const handleRowClick = (id: number) => {
  //   console.log(id)
  //   // router.push(`/`);
  // };

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Depot List</h1>
      
      {/* Search and Filters */}
      <div className="mb-4 space-y-4 w-1/3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search depots..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2"
          >
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="p-4 bg-gray-50 rounded-lg space-y-2">
            <select
              value={filters.state}
              onChange={(e) => setFilters(prev => ({ ...prev, state: e.target.value }))}
              className="w-full p-2 border rounded-lg mb-2"
            >
              <option value="">All States</option>
              <option value="Kuala Lumpur">Kuala Lumpur</option>
              <option value="Selangor">Selangor</option>
              <option value="Perak">Perak</option>
              <option value="Kedah">Kedah</option>
              <option value="Ipoh">Ipoh</option>
              {/* Add more states as needed */}
            </select>
            
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min Chargers"
                value={filters.minCharger}
                onChange={(e) => setFilters(prev => ({ ...prev, minCharger: e.target.value }))}
                className="w-1/2 p-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Max Chargers"
                value={filters.maxCharger}
                onChange={(e) => setFilters(prev => ({ ...prev, maxCharger: e.target.value }))}
                className="w-1/2 p-2 border rounded-lg"
              />
            </div>
          </div>
        )}
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
                  onClick={() => handleSort(key as keyof Depot)}
                >
                  <div className="flex items-center gap-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
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
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {Object.values(item).map((value, index) => (
                  <td key={index} className="px-6 py-4 text-sm text-gray-900">
                    {value}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <Link
                    href={'/'}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    View Site
                  </Link>
                  {/* <button
                    
                    onClick={() => handleRowClick(item.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <
                    View Details
                  </button> */}
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
                currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
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

export default DepotDataTable;