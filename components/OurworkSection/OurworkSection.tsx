import * as styles from './OurworkSection.css'

const OurWorkSection = () => {
  return (
    <section className={styles.ourWork}>
      <div className={styles.intro}>
        <h2 className={styles.introHeader}>Our Work</h2>
        <div className={styles.activeIndicator} />
        <p className={styles.introText}>See what we have worked on...</p>
      </div>
    </section>
  )
}

export default OurWorkSection
