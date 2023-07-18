import Link from 'next/link'
import * as styles from './Footer.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footerLogo}>
          <img
            src="/img/footer/footer-logo.png"
            alt="3rd Lab footer logo"
          ></img>
        </div>
        <div className={styles.copyright}> &#169; 3rdLab 2023</div>
        <div className={styles.social}>
          <Link href={'https://www.facebook.com/3rdlabdev'} target={'_blank'}>
            <img
              className={styles.img}
              src="/img/footer/icon-facebook.png"
              alt="facebook icon"
            />
          </Link>
          <Link
            href={'https://www.linkedin.com/company/3rdlabdev'}
            target={'_blank'}
          >
            <img
              className={styles.img}
              src="/img/footer/icon-linkedin.png"
              alt="linkedin icon"
            />
          </Link>
          <Link href={'https://twitter.com/3rdlabdev'} target={'_blank'}>
            <img
              className={styles.img}
              src="/img/footer/icon-twitter.png"
              alt="twitter icon"
            />
          </Link>
          <Link href={'https://www.instagram.com/3rdlabdev/'} target={'_blank'}>
            <img
              className={styles.img}
              src="/img/footer/icon-instagram.png"
              alt="instagram icon"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
