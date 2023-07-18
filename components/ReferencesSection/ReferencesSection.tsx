import * as styles from './ReferencesSection.css'
import ShowcaseCard from './ShowcaseCard'

const ReferencesSection = () => {
  return (
    <section className={styles.background}>
      <div className={styles.content}>
        <ShowcaseCard
          content={{
            title: 'Our Work',
            innerTitle: 'Seals of Saimaa',
            subtitle1:
              'Seals of Saimaa is an art project created to honor the ringed seal of the Lake Saimaa.',
            subtitle2:
              'We published 430 Saimaa ringed seal-themed NFTs in the Ethereum blockchain.',
            footerText: '',
            link: 'https://www.sealsofsaimaa.com/',
            image: '/img/references/references-seals.png',
          }}
        />
      </div>
    </section>
  )
}

export default ReferencesSection
