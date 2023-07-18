import Link from 'next/link'
import React from 'react'
import * as styles from './ShowcaseCard.css'

interface CardContent {
  title: string
  innerTitle: string
  subtitle1: string
  subtitle2: string
  footerText?: string
  link: string
  image: string
}

interface Props {
  content: CardContent
}

//Use this to show the entire card.
export const ShowcaseCard = ({ content }: Props) => {
  const { title, subtitle1, subtitle2, link, image, footerText, innerTitle } =
    content

  return (
    <div className={styles.showcaseCard}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.middle}>
          <h3 className={styles.innerTitle}>{innerTitle}</h3>
          <div className={styles.innerContent}>
            <div className={styles.text}>
              <p className={styles.subtitle}>{subtitle1}</p>
              <p className={styles.subtitle}>{subtitle2}</p>
            </div>
            <div className={styles.imageWrapper}>
              <img
                className={styles.showcaseCardImage}
                src={image}
                alt="showcase-image"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {footerText && <p>{footerText}</p>}
          <Link className={styles.button} href={link} target={'_blank'}>
            Learn more about the project
          </Link>
        </div>
      </div>
    </div>
  )
}
