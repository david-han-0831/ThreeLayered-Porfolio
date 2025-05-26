import styles from '../styles/AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 제목 */}
        <h1 className={styles.title}>About Us</h1>
        
        {/* 설명 텍스트 */}
        <p className={styles.description}>
          Empower your projects with the right freelance talent. From start to finish, we're here to ensure success.
        </p>

        {/* 팀원 프로필 영역 */}
        <div className={styles.profiles}>
          {/* David */}
          <div className={styles.profile}>
            <h2 className={styles.name}>David</h2>
            <div className={`${styles.avatar} ${styles['avatar-david']}`}></div>
            <p className={styles.location}>Seoul, KR</p>
          </div>

          {/* Mela */}
          <div className={styles.profile}>
            <h2 className={styles.name}>Mela</h2>
            <div className={`${styles.avatar} ${styles['avatar-mela']}`}></div>
            <p className={styles.location}>DC., USA</p>
          </div>

          {/* Erin */}
          <div className={styles.profile}>
            <h2 className={styles.name}>Erin</h2>
            <div className={`${styles.avatar} ${styles['avatar-erin']}`}></div>
            <p className={styles.location}>Sydney, AU</p>
          </div>
        </div>

        {/* 키워드 영역 */}
        <div className={styles.skills}>
          {/* David's skills */}
          <div className={styles['skills-group']}>
            <span className={styles.skill}>Frontend & Backend</span>
            <span className={styles.skill}>AI & ML</span>
            <span className={styles.skill}>Database & Server</span>
          </div>

          {/* Mela's skills */}
          <div className={styles['skills-group']}>
            <span className={styles.skill}>UX Design</span>
            <span className={styles.skill}>UX Research</span>
            <span className={styles.skill}>Web Accessibility</span>
          </div>

          {/* Erin's skills */}
          <div className={styles['skills-group']}>
            <span className={styles.skill}>Branding</span>
            <span className={styles.skill}>Graphic/UI Design</span>
            <span className={styles.skill}>Marketing</span>
          </div>
        </div>

        {/* Talk To Us 버튼 */}
        <button className={styles.button}>
          Talk To Us
        </button>
      </div>
    </div>
  )
}

export default AboutUs
