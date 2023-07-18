import Link from 'next/link'
import * as styles from './AboutSection.css'

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.intro}>
        <h2 className={styles.introHeader}>About Us</h2>
        <div className={styles.activeIndicator} />
        <p className={styles.introText}>
          Our team of experienced professionals is dedicated to helping
          businesses like yours to embrace the potential of Web3 technology.
        </p>
      </div>
      <Link href={'about'} scroll={true}>
        <button className={styles.button}>Learn more</button>
      </Link>
    </section>
  )
}

export default AboutSection
