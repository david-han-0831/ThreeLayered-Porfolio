'use client';
import Image from "next/image";
import React, { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import KeywordList from "./keyword";
import { useRouter } from 'next/navigation';

const SERVICE_CARDS = [
  {
    icon: "/images/service/creative-design-white.svg",
    title: "Brand\nDesign",
  },
  {
    icon: "/images/service/content-marketing.svg",
    title: "Web & App\nDesign",
  },
  {
    icon: "/images/service/content-marketing.svg",
    title: "AI & SaaS\nDevelopment",
  }, 
  {
    icon: "/images/service/content-marketing.svg",
    title: "Digital\nStrategy",
  },
];

export default function Service() {
  const [activeIdx, setActiveIdx] = useState(0);
  const router = useRouter();

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "75.5625rem",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 헤더 */}
      <div
        className="flex flex-col items-center"
        style={{ width: "36.81694rem", maxWidth: "100%", marginBottom: "10.67rem" }}
      >
        <h2
          className="font-sora font-semibold text-center mb-4"
          style={{
            color: "#1C1C1C",
            fontSize: "3.9405rem",
            lineHeight: "5.17556rem",
            fontWeight: 600,
            fontStyle: "normal",
          }}
        >
          <span style={{ color: "#1C1C1C" }}>Various Services</span>
          <br />
          <span style={{ color: "#7461E4" }}>We Provide</span>
        </h2>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.882rem",
            width: "35.40544rem",
            margin: "0 auto",
            maxWidth: "100%",
          }}
        >
          <p
            style={{
              color: "#525252",
              textAlign: "center",
              fontFamily: "Sora, sans-serif",
              fontSize: "0.941rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.4115rem",
              fontFeatureSettings: "'liga' off, 'clig' off",
              margin: 0,
            }}
          >
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
          </p>
        </div>
        <button
          className="
            mt-[1.88rem] w-[14.8125rem] h-[3.875rem] flex-shrink-0
            rounded-xl bg-gradient-to-b from-[#9888F4] to-[#715DE3]
            flex items-center justify-center
            text-[#FFF] text-center font-inter text-[1.125rem] capitalize
            shadow-md transition hover:brightness-110
          "
          onClick={() => router.push('/contact')}
        >
          Talk To Us
        </button>
      </div>

      {/* 탭 영역 */}
      <div
        style={{
          width: "100%",
          maxWidth: "75.5625rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          marginBottom: "5rem",
        }}
      >
        {SERVICE_CARDS.map((card, idx) => (
          <ServiceCard
            key={idx}
            icon={card.icon}
            title={card.title}
            bg={idx === activeIdx ? "bg-[#7461E4]" : "bg-white"}
            textColor={idx === activeIdx ? "text-white" : "text-black"}
            onClick={() => setActiveIdx(idx)}
            isActive={idx === activeIdx}
          />
        ))}
      </div>

      {/* 첫 번째 탭 내용(이미지+키워드) */}
      <div
        style={{
          width: "100%",
          maxWidth: "75.5625rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4rem",
          marginBottom: "6rem",
        }}
      >
        {/* 이미지 영역 - 기존 스타일 유지 */}
        <div
          style={{
            width: "35.63194rem",
            height: "16.48975rem",
            flexShrink: 0,
            borderRadius: "1.11419rem",
            background: "#C4C4C4",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "url('/images/service/logo01_2.png') lightgray 50% / cover no-repeat",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
        {/* 키워드 영역 - 남은 공간 모두 차지 */}
        <div style={{ flex: 1 }}>
          <KeywordList keywords={["Branding", "Logo Design", "Graphic Design", "Custom"]} />
        </div>
      </div>

      {/* 두 번째 탭 내용(키워드+이미지) - 순서 바뀜 */}
      <div
        style={{
          width: "100%",
          maxWidth: "75.5625rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2.5rem",
          marginBottom: "6rem",
        }}
      >
        {/* 키워드 영역 - 왼쪽에 배치 */}
        <div style={{ flex: 1 }}>
          <KeywordList keywords={["Print Design", "Graphic Design", "Content Writing", "Digital Marketing", "Flyer Design", "Custom"]} />
        </div>
        {/* 이미지 영역 - 오른쪽에 배치, 기존 스타일 유지 */}
        <div
          style={{
            width: "35.63194rem",
            height: "16.48975rem",
            flexShrink: 0,
            borderRadius: "1.11419rem",
            background: "#C4C4C4",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "url('/images/service/poster1.jpg') lightgray 50% / cover no-repeat",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      </div>

      {/* 세 번째 탭 내용(이미지+키워드) */}
      <div
        style={{
          width: "100%",
          maxWidth: "75.5625rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4rem",
          marginBottom: "6rem",
        }}
      >
        {/* 이미지 영역 */}
        <div
          style={{
            width: "35.63194rem",
            height: "16.48975rem",
            flexShrink: 0,
            borderRadius: "1.11419rem",
            background: "linear-gradient(90deg, #F5EAF8 0.04%, #EADFEF 99.94%)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "url('/images/service/csa-brochure03_1.jpg') lightgray 50% / cover no-repeat",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
        {/* 키워드 영역 */}
        <div style={{ flex: 1 }}>
          <KeywordList keywords={["Brochure Design", "Graphic Design", "Branding", "Digital Marketing", "Digital Magazine", "Custom"]} />
        </div>
      </div>
    </section>
  );
} 