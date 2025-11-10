"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableServiceCardProps {
  service: {
    description: string;
    moreText: (string | { type: string; text: string })[]; // Relax the type here
  };
  index: number;
}

const ExpandableServiceCard: React.FC<ExpandableServiceCardProps> = ({ service }) => {
  const [isOpen, setOpen] = useState(false);

  const buttonStyle: React.CSSProperties = {
    marginTop: "16px",
    background: "none",
    border: "none",
    color: "#1e3a8a", // Tailwind blue-800
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: 0,
    fontSize: "0.95rem"
  };

  return (
    <>
      <p style={{ color: "#4b5563" }}>{service.description}</p>

      {isOpen && (
        <p style={{ color: "#374151", marginTop: "12px" }}>
          {service.moreText.map((item, textIndex) => {
            if (typeof item === 'string') {
              return item;
            } else if (typeof item === 'object' && item !== null && item.type === 'bold') { // Added check for object and type
              return <strong key={textIndex}>{item.text}</strong>;
            }
            return null;
          })}
        </p>
      )}

      <button
        style={buttonStyle}
        aria-expanded={isOpen}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? "Details ausblenden" : "Service-Details anzeigen"}
        {isOpen ? (
          <ChevronUp size={16} strokeWidth={2} />
        ) : (
          <ChevronDown size={16} strokeWidth={2} />
        )}
      </button>
    </>
  );
};

export default ExpandableServiceCard;