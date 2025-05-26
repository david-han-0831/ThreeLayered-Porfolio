'use client';

interface MotionGraphicsProps {
  videoUrl: string;
}

const MotionGraphics = ({ videoUrl }: MotionGraphicsProps) => {
  return (
    <section className="motion-graphics">
      <div className="video-container">
        <video 
          autoPlay 
          loop 
          muted
          playsInline
          className="video-player"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <style jsx>{`
        .motion-graphics {
          display: flex;
          justify-content: center;
          padding: 2 rem 2rem;
          margin-top: 1rem;
          margin-bottom: 6rem;
          position: relative;
          z-index: 10;
          background: white;
        }

        .video-container {
          max-width: 75.5625rem;
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 10;
        }

        .video-player {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .motion-graphics {
            padding: 4rem 1.5rem;
            margin-top: 4rem;
            margin-bottom: 4rem;
          }
        }

        @media (max-width: 480px) {
          .motion-graphics {
            padding: 3rem 1rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MotionGraphics;
