/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as styles from './FeaturesSection.css'
import TextImage from './TextImage'
import { Waves } from './Waves/Waves'

const Features = () => {
  return (
    <section id="features">
      <Waves />
      <div className={styles.background}>
        <div className={styles.featuresContentWrapper}>
          <h2 className={styles.featuresHeader}>
            We help{' '}
            <span className={styles.featuresHeaderSpan}>{'brands '}</span>
            succeed in <br /> the future of the internet
          </h2>
          <TextImage
            content={{
              title: (
                <>
                  <h2 className={styles.featuresItemHeader}>
                    Publish unique and <br /> engaging{' '}
                    <span className={styles.featuresHeaderSpan}>{' NFTs'}</span>
                  </h2>
                </>
              ),
              subtitle:
                'We offer NFT Development and Management to showcase digital assets and engage with customers in a new way. We provide an end-to-end services from NFT concept design to ongoing management and support.',
              link: 'services#feature1',
              background: 'background1',
            }}
            swap
          />
          <TextImage
            content={{
              title: (
                <>
                  <h2 className={styles.featuresItemHeader}>
                    Take control of your <br />
                    <span className={styles.featuresHeaderSpan}>
                      {' '}
                      digital assets
                    </span>
                  </h2>
                </>
              ),
              subtitle:
                'Develop a Decentralized Application to and provide a secure, transparent experience for your customers. Our team specializes in using blockchain technology to drive innovation.',
              link: 'services#feature2',
              background: 'background2',
            }}
          />
          <TextImage
            content={{
              title: (
                <>
                  <h2 className={styles.featuresItemHeader}>
                    Enhance your brand's <br />
                    <span className={styles.featuresHeaderSpan}>
                      {' operations'}
                    </span>
                  </h2>
                </>
              ),
              subtitle:
                'Our team of experienced professionals is dedicated to helping businesses like yours embrace the potential of Web3 technology. We offer a range of services, including consultancy, to ensure a smooth and effective integration of cutting-edge solutions. Our goal is to empower you to stay ahead of the curve and capitalize on the exciting new opportunities offered by this rapidly evolving field.',
              link: 'services#feature3',
              background: 'background3',
            }}
            swap
          />
          {/*<button className={styles.button}>See more</button>*/}
        </div>
      </div>
    </section>
  )
}

export default Features
