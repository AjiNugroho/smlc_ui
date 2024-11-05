'use client'
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Zap, 
  Radio, 
  Activity,
  Battery,
  Power
} from 'lucide-react';

const TreeCharts = () => {
  const [activePaths, setActivePaths] = useState([]);
  const [hoveredNode, setHoveredNode] = useState(null);
  
  // Node definitions with metadata
  const nodes = [
    { 
      id: 1, 
      x: 100, 
      y: 150, 
      type: "grid",
      label: "Power Grid",
      icon: Zap,
      info: {
        "Electrical Power": "11kV",
        "Grid Stability": "98.5%",
        "Load Factor": "0.85"
      }
    },
    { 
      id: 2, 
      x: 250, 
      y: 150, 
      type: "hub",
      label: "Power Hub",
      icon: Radio,
      info: {
        "Voltage": "400V",
        "Current": "125A",
        "Power Factor": "0.95"
      }
    },
    { 
      id: 3, 
      x: 400, 
      y: 150, 
      type: "meter",
      label: "Smart Meter",
      icon: Activity,
      info: {
        "Energy Usage": "245 kWh",
        "Peak Demand": "75 kW",
        "Power Quality": "Good"
      }
    },
    { 
      id: 4, 
      x: 550, 
      y: 150, 
      type: "charger",
      label: "Depo 1",
      icon: Battery,
      info: {
        "Max Power": "50 kW",
        "Availability": "Online",
        "Utilization": "65%"
      }
    },
    { 
        id: 5, 
        x: 550, 
        y: 250, 
        type: "charger",
        label: "Depo 2",
        icon: Battery,
        info: {
          "Max Power": "50 kW",
          "Availability": "Online",
          "Utilization": "65%"
        }
    },
    { 
        id: 6, 
        x: 550, 
        y: 50, 
        type: "charger",
        label: "Depo 3",
        icon: Battery,
        info: {
          "Max Power": "50 kW",
          "Availability": "Online",
          "Utilization": "65%"
        }
    },
    { 
        id: 7, 
        x: 400, 
        y: 450, 
        type: "meter",
        label: "Smart Meter 2",
        icon: Activity,
        info: {
          "Energy Usage": "245 kWh",
          "Peak Demand": "75 kW",
          "Power Quality": "Good"
        }
    },
  ];

  // Connector status data
  const connectors = [
    { id: 1, status: 'available', label: 'CCS-1' },
    { id: 2, status: 'occupied', label: 'CCS-2' },
    { id: 3, status: 'error', label: 'CHAdeMO' },
    { id: 4, status: 'available', label: 'Type-2' }
  ];

  // Define paths between nodes
  const paths = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
    { from: 2, to: 7 },
  ];

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePaths(prev => {
        if (prev.length >= paths.length) {
          return [];
        }
        return [...prev, prev.length];
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Status color mapping
  const getStatusColor = (status:string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'occupied': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="p-6 relative min-h-[600px]">
      <svg className="w-full h-screen">
        {/* Draw connecting paths */}
        {paths.map((path, index) => {
          const startNode = nodes.find(n => n.id === path.from);
          const endNode = nodes.find(n => n.id === path.to);
          const isActive = activePaths.includes(index);
          
          return (
            <path
              key={`path-${index}`}
              d={`M ${startNode.x + 30} ${startNode.y} L ${endNode.x - 30} ${endNode.y}`}
              stroke={isActive ? "#3b82f6" : "#ddd"}
              strokeWidth={isActive ? "3" : "2"}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Draw nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <g 
              key={node.id}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="25"
                fill="white"
                stroke="#3b82f6"
                strokeWidth="2"
                className="transition-all duration-300"
              />
              <foreignObject
                x={node.x - 12}
                y={node.y - 12}
                width="24"
                height="24"
              >
                <Icon className="text-blue-500" />
              </foreignObject>
              <text
                x={node.x}
                y={node.y + 40}
                textAnchor="middle"
                className="text-sm font-medium"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Draw connectors after the last charge point */}
        {connectors.map((connector, index) => (
          <g key={`connector-${connector.id}`}>
            <circle
              cx={650 + (index * 50)}
              cy={150}
              r="15"
              className={`${getStatusColor(connector.status)} transition-all duration-300`}
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={650 + (index * 50)}
              y={190}
              textAnchor="middle"
              className="text-xs"
            >
              {connector.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Hover information card */}
      {hoveredNode && (
        <div 
          className="absolute bg-white p-4 rounded-lg shadow-lg border border-blue-200"
          style={{
            top: `${hoveredNode.y + 80}px`,
            left: `${hoveredNode.x - 100}px`,
            minWidth: '200px'
          }}
        >
          <h3 className="font-bold mb-2 text-blue-600">{hoveredNode.label}</h3>
          {Object.entries(hoveredNode.info).map(([key, value]) => (
            <div key={key} className="flex justify-between mb-1">
              <span className="text-gray-600">{key}:</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default TreeCharts;