import React from 'react';
import { Card } from '@/components/ui/card';
import { GiRadioTower,GiBattery100 } from "react-icons/gi";
import { RiChargingPile2Fill } from "react-icons/ri";
import { GrSelection } from "react-icons/gr";
import { FaMicrochip } from "react-icons/fa";

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
  type:string;
  icon:React.ReactNode;
  info:{[key:string]:string}
}

interface Path {
  from: number;
  to: number;
}

const TreeChartFlow: React.FC = () => {
  const nodes: Node[] = [
    { 
        id: 1, 
        x: 100, 
        y: 150, 
        type: "grid",
        label: "Power Grid",
        icon: <GiRadioTower size={20}/>,
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
        type: "cabinet",
        label: "Power Cabinet",
        icon: <GrSelection size={20}/>,
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
        icon: <FaMicrochip size={20}/>,
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
        type: "battery",
        label: "Battery 1",
        icon: <GiBattery100 size={20}/>,
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
          label: "Depo 1",
          icon: <RiChargingPile2Fill size={20}/>,
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
          label: "Depo 2",
          icon: <RiChargingPile2Fill size={20}/>,
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
          icon: <FaMicrochip size={20}/>,
          info: {
            "Energy Usage": "245 kWh",
            "Peak Demand": "75 kW",
            "Power Quality": "Good"
          }
      },
  ];

  const paths: Path[] = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
  ];

  const createPath = (start: Node, end: Node): string => {
    const midY = (start.y + end.y) / 2;
    return `M ${start.x} ${start.y} 
            C ${start.x} ${midY},
              ${end.x} ${midY},
              ${end.x} ${end.y}`;
  };

  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      <svg 
        className="w-full h-screen"
      >
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

        {/* Draw animated paths */}
        <g className="transition-all duration-300 ease-in-out">
          {paths.map((path, index) => {
            const startNode = nodes.find(n => n.id === path.from);
            const endNode = nodes.find(n => n.id === path.to);
            
            if (!startNode || !endNode) return null;

            return (
              <path
                key={`animated-path-${index}`}
                d={createPath(startNode, endNode)}
                className="transition-colors duration-300"
                fill="none"
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
          })}
        </g>

        {/* Draw nodes */}
        <g className="transition-all duration-300 ease-in-out">
          {nodes.map((node) => (
            <g 
              key={node.id}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="25"
                className="fill-white stroke-blue-500 stroke-2 transition-colors duration-300 hover:stroke-blue-600"
              />
              <text
                x={node.x}
                y={node.y}
                className="text-sm font-medium fill-gray-700 select-none"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {node.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </Card>
  );
};

export default TreeChartFlow;