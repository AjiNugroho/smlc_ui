'use client'
import React, { useState, useEffect, FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Radio, Activity, Battery } from 'lucide-react';
import { GrSelection } from "react-icons/gr";
import { GiRadioTower } from "react-icons/gi";
import { BiSolidMicrochip } from "react-icons/bi";
import { FaChargingStation } from "react-icons/fa6";
import { IoBatteryCharging } from "react-icons/io5";
import { get } from 'http';

interface Node {
  id: number;
  x: number;
  y: number;
  type: string;
  label: string;
  icon: React.ReactNode;
  info: Record<string, string>;
}

interface Connector {
  id: number;
  status: 'available' | 'occupied' | 'error';
  label: string;
  startY:number;
  startX:number;

}

interface Path {
  from: number;
  to: number;
}

const TreeChartsV2: FC = () => {
  const [activePaths, setActivePaths] = useState<number[]>([]);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  const nodes: Node[] = [
    { id: 1, x: 100, y: 350, type: "grid", label: "Power Grid", icon: <GiRadioTower size={24}/>, info: { "Electrical Power": "11kV", "Grid Stability": "98.5%", "Load Factor": "0.85" } },
    { id: 2, x: 250, y: 150, type: "cabinet", label: "Cabinet", icon: <GrSelection size={24}/>, info: { "Voltage": "400V", "Current": "125A", "Power Factor": "0.95" } },
    { id: 3, x: 400, y: 150, type: "meter", label: "Smart Meter", icon: <BiSolidMicrochip size={24}/>, info: { "Energy Usage": "245 kWh", "Peak Demand": "75 kW", "Power Quality": "Good" } },
    { id: 4, x: 550, y: 150, type: "charger", label: "Depo 1", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 5, x: 550, y: 250, type: "charger", label: "Depo 2", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 6, x: 550, y: 50, type: "charger", label: "Depo 3", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 7, x: 400, y: 350, type: "meter", label: "Smart Meter 2", icon:<BiSolidMicrochip size={24}/>, info: { "Energy Usage": "245 kWh", "Peak Demand": "75 kW", "Power Quality": "Good" } },
    { id: 8, x: 550, y: 350, type: "charger", label: "Depo 4", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 9, x: 250, y: 450, type: "meter", label: "Smart Meter 3", icon:<BiSolidMicrochip size={24}/>, info: { "Energy Usage": "245 kWh", "Peak Demand": "75 kW", "Power Quality": "Good" } },
    { id: 10, x: 550, y: 450, type: "charger", label: "Depo 5", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 11, x: 550, y: 550, type: "charger", label: "Depo 6", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 12, x: 250, y: 650, type: "meter", label: "Smart Meter 4", icon:<BiSolidMicrochip size={24}/>, info: { "Energy Usage": "245 kWh", "Peak Demand": "75 kW", "Power Quality": "Good" } },
    { id: 13, x: 400, y: 650, type: "battery", label: "Battery 1", icon: <IoBatteryCharging size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 14, x: 400, y: 750, type: "battery", label: "Battery 2", icon: <IoBatteryCharging size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 15, x: 550, y: 650, type: "charger", label: "Depo 7", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    { id: 16, x: 550, y: 750, type: "charger", label: "Depo 8", icon: <FaChargingStation size={24}/>, info: { "Max Power": "50 kW", "Availability": "Online", "Utilization": "65%" } },
    
  ];

  const connectors: Connector[] = [
    { id: 1, status: 'available', label: 'Type-1', startY:50,startX:0 },
    { id: 2, status: 'occupied', label: 'CCS',startY:50,startX:50 },
    { id: 3, status: 'error', label: 'CHAdeMO',startY:50,startX:100 },
    { id: 4, status: 'available', label: 'Type-2',startY:50,startX:150 },
    { id: 5, status: 'available', label: 'Type-1',startY:150,startX:0 },
    { id: 6, status: 'available', label: 'Type-2',startY:150,startX:50 },
    { id: 7, status: 'occupied', label: 'CHAdeMO',startY:150,startX:100 },
    { id: 8, status: 'available', label: 'CCS',startY:150,startX:150 },
    { id: 9, status: 'available', label: 'Type-3',startY:250,startX:0 },
    { id: 10, status: 'available', label: 'Type-4',startY:250,startX:50 },
    { id: 11, status: 'available', label: 'Type-1',startY:250,startX:100 },
    { id: 12, status: 'available', label: 'Type-2',startY:250,startX:150 },

    { id: 13, status: 'available', label: 'Type-1',startY:350,startX:0 },
    { id: 14, status: 'error', label: 'Type-2',startY:350,startX:50 },
    { id: 15, status: 'available', label: 'CSS',startY:350,startX:100 },
    { id: 16, status: 'occupied', label: 'CHAdeMO',startY:350,startX:150 },

    { id: 17, status: 'available', label: 'Type-2',startY:450,startX:0 },
    { id: 18, status: 'error', label: 'CSS',startY:450,startX:50 },
    { id: 19, status: 'occupied', label: 'CHAdeMO',startY:450,startX:100 },

    { id: 20, status: 'available', label: 'Type-2',startY:550,startX:0 },
    { id: 21, status: 'available', label: 'CSS',startY:550,startX:50 },
    { id: 22, status: 'available', label: 'CHAdeMO',startY:550,startX:100 },

    { id: 23, status: 'occupied', label: 'CSS',startY:650,startX:0 },
    { id: 24, status: 'occupied', label: 'CHAdeMO',startY:650,startX:50 },

    { id: 25, status: 'available', label: 'CSS',startY:750,startX:0 },
    { id: 26, status: 'occupied', label: 'CHAdeMO',startY:750,startX:50 }
  ];

  const paths: Path[] = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
    { from: 2, to: 7 },
    { from: 7, to: 8 },
    { from: 1, to: 9 },
    { from: 9, to: 10 },
    { from: 9, to: 11 },

    { from: 1, to: 12 },
    { from: 12, to: 13 },
    { from: 12, to: 14 },
    { from: 12, to: 15 },
    { from: 14, to: 16 },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePaths((prev) => {
        if (prev.length >= paths.length) return [];
        return [...prev, prev.length];
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return '#3b82f6';
      case 'occupied': return '#f5b73b';
      case 'error': return '#f53b3b';
      default: return '#525454';
    }
  };

  return (
    <Card className="p-4 relative w-full h-screen shadow-lg rounded-xl">
        <CardHeader>
            <CardTitle className='font-semibold text-lg'>Site Map Diagram</CardTitle>
        </CardHeader>
        <CardContent className='w-full h-full'>        
        <svg className="w-full h-full">
            <defs>
                {/* Define the animation keyframes */}
                <animate
                    id="dashedLine"
                    attributeName="stroke-dashoffset"
                    values="-10;0"
                    dur="1s"
                    repeatCount="indefinite"
                />
                </defs>

            {paths.map((path, index) => {
                const startNode = nodes.find((n) => n.id === path.from);
                const endNode = nodes.find((n) => n.id === path.to);
                const isActive = activePaths.includes(index);

                if (!startNode || !endNode) return null;

                // Calculate the midpoint for the stepped effect
                const midX = (startNode.x + endNode.x) / 2;

                return (
                <path
                    key={`path-${index}`}
                    d={`M ${startNode.x + 30} ${startNode.y} L ${midX} ${startNode.y} L ${midX} ${endNode.y} L ${endNode.x - 30} ${endNode.y}`}
                    className="transition-all duration-300"
                    fill="none"
                    // stroke={isActive ? "#3b82f6" : "#ddd"}
                    // strokeWidth={isActive ? "3" : "2"}
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                >
                    <animate
                    attributeName="stroke-dashoffset"
                    from="10"
                    to="0"
                    dur="1s"
                    repeatCount="indefinite"
                    />
                </path>
                );
                })
            }

            {nodes.map((node) => {
            //   const Icon = node.icon;
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
                <foreignObject x={node.x - 12} y={node.y - 12} width="24" height="24">
                {node.icon}
                </foreignObject>
                <text x={node.x} y={node.y + 40} textAnchor="middle" className="text-sm font-medium">
                    {node.label}
                </text>
                </g>
            );
            })}

            {connectors.map((connector, index) => 
                (
                <g key={`connector-${connector.id}`}>
                    <circle
                    cx={650 + (connector.startX)}
                    cy={connector.startY}
                    r="15"
                    className={`${getStatusColor(connector.status)} transition-all duration-300`}
                    stroke="white"
                    strokeWidth="2"
                    fill={getStatusColor(connector.status)}
                    />
                    <text x={650 + (connector.startX)} y={connector.startY+35} textAnchor="middle" className="text-xs">
                    {connector.label}
                    </text>
                </g>
                )
            )}
        </svg>

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
      </CardContent>
    </Card>
  );
};

export default TreeChartsV2;