import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  bg: string;
  textColor: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  bg,
  textColor,
  onClick,
  isActive,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        width: "17.23219rem",
        padding: "1.4115rem 0.4705rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.4115rem",
        borderRadius: "0.941rem",
        background: isActive ? "#7461E4" : "#FFF",
        boxShadow: "3.764px 10.351px 32.935px 0px rgba(0,0,0,0.07)",
        boxSizing: "border-box",
        cursor: "pointer",
        transition: "transform 0.15s",
      }}
    >
      <div>
        <Image src={icon} alt={title} width={64} height={64} style={isActive ? { filter: "brightness(0) invert(1)" } : {}} />
      </div>
      <div
        className={`whitespace-pre-line text-center font-sora font-semibold text-2xl ${textColor}`}
      >
        {title}
      </div>
    </div>
  );
}; 