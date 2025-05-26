'use client';

const Project = () => {
  return (
    <section className="project-section">
      <div className="project-container">
        <div className="project-background">
          <div className="content-wrapper">
            <h3 className="subtitle">All-in-one Business Manager</h3>
            <h2 className="title">
              Have an idea?<br />
              Let's bring it to life!
            </h2>
            <button className="cta-button">Get Started Free</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-section {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 2rem;
        }

        .project-container {
          width: 100%;
          max-width: 75.5625rem;
          display: flex;
          justify-content: center;
          margin-top: 5rem;
        }

        .project-background {
          width: 80.125rem;
          height: 31.05619rem;
          flex-shrink: 0;
          border-radius: 1.86338rem;
          background-image: url('/images/project-section/background.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.8; 
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .content-wrapper {
          position: absolute;
          z-index: 1;
          opacity: 1;
          mix-blend-mode: normal;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .subtitle {
          color: #FFF;
          text-align: center;
          font-family: Sora;
          font-size: 2.17394rem;
          font-style: normal;
          font-weight: 300;
          line-height: 2.17394rem;
          opacity: 0.8;
          margin: 0;
        }

        .title {
          color: #FFF;
          text-align: center;
          font-family: Sora;
          font-size: 3.72675rem;
          font-style: normal;
          font-weight: 700;
          line-height: 4.34788rem;
          letter-spacing: -0.11181rem;
          margin: 0;
        }

        .cta-button {
          width: 12.67094rem;
          height: 3.72675rem;
          flex-shrink: 0;
          border-radius: 1.86338rem;
          background: #FFCE5A;
          border: none;
          cursor: pointer;
          color: #202124;
          text-align: center;
          font-family: Sora;
          font-size: 1.05594rem;
          font-style: normal;
          font-weight: 600;
          line-height: 0.86956rem;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 206, 90, 0.3);
        }

        /* 반응형 디자인 */
        @media (max-width: 768px) {
          .project-background {
            width: 100%;
            height: 20rem;
          }

          .subtitle {
            font-size: 1.5rem;
            line-height: 1.5rem;
          }

          .title {
            font-size: 2.5rem;
            line-height: 3rem;
          }

          .cta-button {
            width: 10rem;
            height: 3rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .project-background {
            height: 15rem;
          }

          .subtitle {
            font-size: 1.2rem;
            line-height: 1.2rem;
          }

          .title {
            font-size: 2rem;
            line-height: 2.4rem;
          }

          .cta-button {
            width: 9rem;
            height: 2.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Project;
