import React from 'react'
import * as s from './TextImage.css'

interface TextImageContent {
  title: React.ReactNode
  subtitle: string
  link: string
  background: string
}

interface Props {
  content: TextImageContent
  swap?: boolean
}

const backgroundSwitch = ({ background }: { background: string }) => {
  switch (background) {
    case 'background1':
      return <div className={s.backgroundImage.background1}></div>
    case 'background2':
      return <div className={s.backgroundImage.background2}></div>
    case 'background3':
      return <div className={s.backgroundImage.background3}></div>
    default:
      return <div />
  }
}

export const TextImage = ({ content, swap = false }: Props) => {
  const { title, subtitle, background } = content

  return (
    <div className={s.textImage}>
      <div className={s.inner({ swap })}>
        <div className={s.textContentWrapper({ swap })}>
          {title}
          <span className={s.activeIndicator} />
          <p className={s.text}>{subtitle}</p>
          {/*<Link className={styles.button} href={link}>*/}
          {/*  SEE DETAILS*/}
          {/*</Link>*/}
        </div>
        <div className={s.imageContentWrapper}>
          <div className={s.imageWrapper({ swap })}>
            {backgroundSwitch({ background })}
          </div>
        </div>
      </div>
    </div>
  )
}
