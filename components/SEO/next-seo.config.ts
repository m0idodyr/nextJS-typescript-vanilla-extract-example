import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  //Any 'title' is shown at the place of %s
  titleTemplate: '3rd Lab | %s',
  //Shown if no title is chosen
  defaultTitle: '3rd Lab | Web3 solutions',
  description:
    '3rd Lab has the skills you need for building a web3 application. We help brands succeed in the future of the internet.',
  //Used by search engines to determine the authoritative URL for a page
  canonical: 'https://3rdlab.xyz',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    //Used by social media platforms to determine which URL to display when a page is shared
    url: 'https://3rdlab.xyz',
    siteName: '3rd Lab',
    images: [
      {
        url: '/img/seo/3rd-lab-default-image.png',
        width: 400,
        height: 400,
        alt: '3rd Lab default image',
        type: 'image/png',
      },
      {
        url: '/img/seo/3rd-lab-default-image-twitter.png',
        width: 150,
        height: 150,
        alt: '3rd Lab default image for Twitter',
        type: 'image/png',
      },
      {
        url: '/img/seo/3rd-lab-default-image-facebook.png',
        width: 1200,
        height: 630,
        alt: '3rd Lab default image for Facebook',
        type: 'image/png',
      },
      {
        url: '/img/seo/3rd-lab-default-image-linkedin.png',
        width: 1200,
        height: 627,
        alt: '3rd Lab default image for LinkedIn',
        type: 'image/png',
      },
      {
        url: '/img/seo/3rd-lab-default-image-google.png',
        width: 800,
        height: 600,
        alt: '3rd Lab default image for Google',
        type: 'image/png',
      },
      {
        url: '/img/seo/3rd-lab-default-image-discord.png',
        width: 400,
        height: 400,
        alt: '3rd Lab default image for Discord',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@3rdlabdev',
    site: '@3rdlabdev',
    cardType: 'summary',
  },
}

export default config
