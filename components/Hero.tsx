'use client';

import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWord, setCurrentWord] = useState('UX DESIGN');
  const [isChanging, setIsChanging] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleIconCount, setVisibleIconCount] = useState(0);
  const heroSectionRef = useRef<HTMLElement>(null);
  const toolIconsRef = useRef<HTMLDivElement>(null);
  const words = ['UX DESIGN', 'DEVELOPMENT', 'MARKETING'];
  const typingSpeed = 150; // 타이핑 속도 (밀리초)

  // 각 단어별 이미지 세트
  const imageSets = {
    'UX DESIGN': [
      { src: '/images/hero/Figma.png', position: 'figma-icon' },
      { src: '/images/hero/Optimal_Workshop2.png', position: 'optimal-icon' },
      { src: '/images/hero/Framer2.png', position: 'framer-icon' },
      { src: '/images/hero/Maze2.png', position: 'maze-icon' }
    ],
    'DEVELOPMENT': [
      // 추후 개발 관련 이미지 추가
      { src: '/images/hero/Python.png', position: 'figma-icon' },
      { src: '/images/hero/React.png', position: 'optimal-icon' },
      { src: '/images/hero/Flutter.png', position: 'framer-icon' },
      { src: '/images/hero/Spring.png', position: 'maze-icon' }
    ],
    'MARKETING': [
      // 추후 마케팅 관련 이미지 추가
      { src: '/images/hero/Primier.png', position: 'figma-icon' },
      { src: '/images/hero/AfterEffect.png', position: 'optimal-icon' },
      { src: '/images/hero/Mailchimp.png', position: 'framer-icon' },
      { src: '/images/hero/Meta.png', position: 'maze-icon' }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroSectionRef.current.offsetHeight;
        const progress = Math.min(scrollPosition / heroHeight, 1);
        
        // 스크롤 위치를 상태로 업데이트
        setScrollY(scrollPosition);
      }
    };

    // 스크롤 이벤트에 passive 옵션 추가
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibleIconCount(entry.isIntersecting ? 4 : 0);
      },
      {
        threshold: 0.1
      }
    );

    const motionSection = document.querySelector('.motion-graphics');
    if (motionSection) {
      observer.observe(motionSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;    
    let timer: NodeJS.Timeout;
    let wordIndex = 0;

    const typeEffect = () => {
      const currentWordText = words[wordIndex];
      
      if (!isDeleting) {
        if (currentIndex <= currentWordText.length) {
          setTypedText(currentWordText.slice(0, currentIndex));
          // 타이핑이 75% 이상 완료되면 아이콘 표시 시작
          if (currentIndex >= currentWordText.length * 0.75) {
            // 남은 타이핑 진행도에 따라 아이콘 개수 증가
            const progress = (currentIndex - (currentWordText.length * 0.75)) / (currentWordText.length * 0.25);
            const iconCount = Math.ceil(progress * 4);
            setVisibleIconCount(Math.min(iconCount, 4));
          }
          currentIndex++;
          timer = setTimeout(typeEffect, typingSpeed);
        } else {
          timer = setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, 1500); // 타이핑 완료 후 대기 시간 증가
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
          setTypedText(currentWordText.slice(0, currentIndex));
          // 삭제 시작할 때 아이콘도 함께 사라지도록
          const progress = currentIndex / currentWordText.length;
          const iconCount = Math.ceil(progress * 4);
          setVisibleIconCount(Math.max(0, iconCount));
          timer = setTimeout(typeEffect, typingSpeed / 2);
        } else {
          wordIndex = (wordIndex + 1) % words.length;
          setIsChanging(true);
          setVisibleIconCount(0);
          setTimeout(() => {
            setCurrentWord(words[wordIndex]);
            setIsChanging(false);
          }, 300);
          isDeleting = false;
          timer = setTimeout(typeEffect, typingSpeed);
        }
      }
    };

    typeEffect();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // 아이콘 위치 계산
  const calculateIconStyle = (index: number, position: string) => {
    if (!heroSectionRef.current) return {};
    
    const heroHeight = heroSectionRef.current.offsetHeight;
    const scrollProgress = Math.min(scrollY / heroHeight, 1);
    const translateY = scrollProgress * 100; // 이동 거리를 줄임
    
    const baseOffset = position === 'figma-icon' || position === 'maze-icon' ? -50 : 0;
    const initialY = -20;
    
    return {
      transform: `translateY(calc(${baseOffset}% + ${initialY}px + ${translateY}px))`,
      transitionDelay: `${index * 0.2}s`,
      opacity: index < visibleIconCount ? 1 : 0,
      transition: 'all 0.3s ease-out'
    };
  };

  return (
    <section className="hero-section" ref={heroSectionRef}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            YOUR FULL-SERVICE DIGITAL PARTNER,
            <br />
            SPECIALISING IN{' '}
            <span className="highlight-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            We bring clarity, creativity, and tech together to support your growth.
          </p>
          <button className="hero-button">
            Talk to us
          </button>
        </div>
        
        {/* 툴 아이콘들 */}
        <div className="tool-icons" ref={toolIconsRef}>
          {imageSets[currentWord as keyof typeof imageSets]?.map((image: any, index: number) => (
            <div
              key={`${currentWord}-${index}`}
              className={`tool-icon ${image.position} ${isChanging ? 'changing' : ''}`}
              style={{
                backgroundImage: `url(${image.src})`,
                ...calculateIconStyle(index, image.position)
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50vh;
          padding: 2rem;
          position: relative;
          margin-top: 5rem; /* navbar 높이만큼 여백 추가 */
        }

        .hero-container {
          width: 100%;
          max-width: 75.5625rem;
          position: relative;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .tool-icons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 70%;
          pointer-events: none;
          z-index: 1;
          will-change: transform;
        }

        .tool-icon {
          position: absolute;
          width: 5rem;
          height: 5rem;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 0.5rem;
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 0.5s ease-out, transform 0.3s ease-out;
        }

        .tool-icon.changing {
          opacity: 0;
        }

        .tool-icon.figma-icon {
          top: 85%;
          left: 1.5rem;
        }

        .tool-icon.optimal-icon {
          bottom: -65%;
          left: 4.5rem;
        }

        .tool-icon.framer-icon {
          bottom: -65%;
          right: 5.5rem;
        }

        .tool-icon.maze-icon {
          top: 85%;
          right: 1.5rem;
        }

        .hero-title {
          color: #000;
          text-align: center;
          font-family: 'Sora', sans-serif;
          font-size: 3.625rem;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          margin: 0;
          width: 100%;
        }

        .highlight-text {
          color: #715DE3;
          font-family: 'Sora', sans-serif;
          font-size: 3.625rem;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          border-radius: 1rem;
          background: rgba(219, 213, 255, 0.40);
          padding: 0.5rem 1rem;
          display: inline-block;
        }

        .hero-subtitle {
          color: #5B5F62;
          text-align: center;
          font-family: 'Sora', sans-serif;
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          width: 27.5625rem;
          max-width: 100%;
          margin: 2rem auto 0;
        }

        .hero-button {
          width: 14.8125rem;
          height: 3.875rem;
          flex-shrink: 0;
          border-radius: 0.75rem;
          background: linear-gradient(180deg, #9888F4 0%, #715DE3 100%);
          border: none;
          color: #FFF;
          text-align: center;
          font-family: 'Sora', sans-serif;
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: capitalize;
          margin: 2.5rem auto 0;
          display: block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(113, 93, 227, 0.3);
        }

        .hero-button:active {
          transform: translateY(0);
        }

        .cursor {
          animation: blink 1s infinite;
          opacity: 1;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        /* 반응형 디자인 */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .highlight-text {
            font-size: 2.5rem;
            padding: 0.4rem 0.8rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
            width: 90%;
          }

          .hero-button {
            width: 13rem;
            height: 3.5rem;
            font-size: 1rem;
          }

          .tool-icon {
            width: 2rem;
            height: 2rem;
          }

          .tool-icon.figma-icon {
            top: 55%;
            left: -4.5rem;
          }

          .tool-icon.optimal-icon {
            bottom: 5%;
            left: -4.5rem;
          }

          .tool-icon.framer-icon {
            bottom: 5%;
            right: -4.5rem;
          }

          .tool-icon.maze-icon {
            top: 55%;
            right: -4.5rem;
          }
        }

       @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }
          
          .highlight-text {
            font-size: 1.8rem;
            padding: 0.3rem 0.6rem;
          }

          .hero-subtitle {
            font-size: 1rem;
            width: 95%;
          }

          .hero-button {
            width: 11rem;
            height: 3rem;
            font-size: 0.9rem;
          }

          .tool-icon {
            width: 2.5rem;
            height: 2.5rem;
          }

          .tool-icon.figma-icon {
            top: 55%;
            left: -3rem;
          }

          .tool-icon.optimal-icon {
            bottom: 5%;
            left: -3rem;
          }

          .tool-icon.framer-icon {
            bottom: 5%;
            right: -3rem;
          }

          .tool-icon.maze-icon {
            top: 55%;
            right: -3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
