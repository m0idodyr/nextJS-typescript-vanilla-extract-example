import { ReactElement } from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import * as styles from './ContactSection.css'

interface ContactSectionProps {
  children?: ReactElement
}

const ContactSection = ({ children }: ContactSectionProps) => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.contentWrapper}>
            {children ? (
              children
            ) : (
              <div className={styles.textContent}>
                <h2 className={styles.header}>Contact</h2>
                <p className={styles.text}>
                  Do you have an idea for the new web3 project or do you have a
                  general enquiry? Send us a message and lets talk!
                </p>
              </div>
            )}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
