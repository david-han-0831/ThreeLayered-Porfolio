import React from "react";

interface KeywordListProps {
  keywords: string[];
}

export default function KeywordList({ keywords }: KeywordListProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "35.63194rem",
        height: "13.09156rem",
        alignItems: "center",
        alignContent: "center",
        gap: "1.11419rem",
        flexShrink: 0,
        flexWrap: "wrap",
      }}
    >
      {keywords.map((keyword, idx) => (
        <span
          key={idx}
          style={{
            display: "flex",
            padding: "1.11419rem",
            alignItems: "center",
            gap: "1.11419rem",
            borderRadius: "5.57088rem",
            border: "0.891px solid #CBCFE2",
            color: "#434343",
            fontFamily: "Sora",
            fontSize: "1.11419rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            background: "#fff",
          }}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
} 