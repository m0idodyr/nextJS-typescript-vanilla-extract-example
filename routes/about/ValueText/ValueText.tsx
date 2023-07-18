import React from 'react'
import * as styles from './ValueText.css'

interface ValueTextContent {
  title: string
  subtitle: string
}

interface Props {
  content: ValueTextContent
}

export const ValueText = ({ content }: Props) => {
  const { title, subtitle } = content

  return (
    <div className={styles.valueText}>
      <h2 className={styles.header}>{title}</h2>
      <p className={styles.text}>{subtitle}</p>
    </div>
  )
}
