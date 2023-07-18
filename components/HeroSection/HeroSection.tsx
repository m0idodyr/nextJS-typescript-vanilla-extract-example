import Link from 'next/link'
import GlitchLogo from './GlitchLogo'
import * as styles from './HeroSection.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.textContent}>
            <h1 className={styles.headerText}>
              Web3 solutions for the new wave of Internet
            </h1>
            <h3 className={styles.secondaryText}>
              Create a new market for your digital assets or explore the
              potential of NFTs in your industry
            </h3>
            <Link href={'#features'} scroll={false}>
              <button className={styles.button}>Get started</button>
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <GlitchLogo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
