/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import ContactSection from '../../components/ContactSection'
import { Waves } from './../../components/FeaturesSection/Waves/Waves'
import * as styles from './About.css'
import { ValueText } from './ValueText/ValueText'

const About: NextPage = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.content}>
          <div className={styles.inner}>
            <div className={styles.textContent}>
              <h1 className={styles.headerText}>
                We believe in a future where digital ownership is accessible and
                appreciated
              </h1>
              <p className={styles.secondaryText}>
                3rd Lab was founded on this new wave of the internet to answer
                the need for brands to create thoughtful, innovative
                applications that can create and support brands and communities
              </p>
            </div>
          </div>
        </div>
      </div>
      <Waves />
      <div className={styles.mid}>
        <div className={styles.intro}>
          <p>
            We specialize in developing cutting-edge solutions using the latest
            innovations in the field of non-fungible tokens (NFTs). We are
            dedicated to pushing the boundaries of what is possible with NFTs,
            creating unique and engaging experiences for our clients and their
            customers.
          </p>
          <p>
            With a focus on innovation and creativity, we work closely with your
            brand to understand their needs and develop custom solutions that
            drive value for business.
          </p>
        </div>
        <div className={styles.commitments}>
          <div className={styles.item}>
            <ValueText
              content={{
                title: 'Empowering Brands with Decentralized Solutions',
                subtitle:
                  'We are committed to a decentralized internet where individuals have ultimate control over their digital assets and personal information. Our Web3 offerings empower brands and individuals alike, reducing the hold centralized organizations have over them.',
              }}
            />
          </div>
          <div className={styles.item}>
            <ValueText
              content={{
                title: 'Innovative NFT Solutions',
                subtitle:
                  'Innovation drives everything we do. We leverage the latest technology to create unparalleled opportunities for digital assets to be displayed and interacted with in new and captivating ways. Our NFT solutions give brands a competitive edge by allowing them to showcase their work in innovative and unique ways.',
              }}
            />
          </div>
          <div className={styles.item}>
            <ValueText
              content={{
                title: 'Take Control of Your Digital Presence',
                subtitle:
                  'We believe in empowering our clients to take full control of their digital assets and personal data. Our NFT solutions grant brands and individuals the power to manage and monetize their digital content, making informed decisions about how it is used and shared. Take control of your digital presence with our innovative and empowering solutions.',
              }}
            />
          </div>
        </div>
      </div>
      <ContactSection>
        <div className={styles.team}>
          <div className={styles.profile}>
            <div className={styles.profilePicture}>
              <img src="/img/about/kasper.webp" alt="profile-picture"></img>
            </div>
            <div className={styles.profileTextWrapper}>
              <p>
                Hey, I'm Kasper, CEO and Founder of 3rd Lab.
                <br />
                Send me message and let's start your web3 project together!
              </p>
            </div>
          </div>
        </div>
      </ContactSection>
    </>
  )
}

export default About
