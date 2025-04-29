"use client";

import React from 'react';
import {
  Square,
  Home,
  Sun,
  Shield,
  DoorClosed,
  LucideIcon // Import LucideIcon type
} from "lucide-react"; // Import icons

import ExpandableServiceCard from "./ExpandableServiceCard"; // Import the Client Component

// Map icon names to icon components
const iconMap: { [key: string]: LucideIcon } = {
  Square: Square,
  Home: Home,
  Sun: Sun,
  Shield: Shield,
  DoorClosed: DoorClosed,
};

interface ServiceCardProps {
  service: {
    icon: string; // icon is now a string name
    title: string;
    description: string;
    moreText: (string | { type: string; text: string })[];
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = iconMap[service.icon]; // Get the icon component from the map

  if (!Icon) {
    console.error(`Icon not found for name: ${service.icon}`);
    return null; // Or render a fallback icon
  }

  const iconWrapperStyle: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#dbeafe", // Tailwind blue-100
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px"
  };

  return (
    <div
      key={index}
      className="border-none shadow-md p-6 rounded-xl transition-shadow duration-300 bg-white hover:shadow-lg" // Replaced inline styles and event handlers with Tailwind classes
    >
      <div style={iconWrapperStyle} aria-hidden="true">
        <Icon size={24} strokeWidth={2} color="#2563eb" /* blue-600 */ />
      </div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>
        {service.title}
      </h3>
      {/* Client Component for expandable content and button */}
      <ExpandableServiceCard service={service} index={index} />
    </div>
  );
};

export default ServiceCard;