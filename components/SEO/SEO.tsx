import { NextSeo } from 'next-seo'
import Favicons from './Favicons'

interface SEOContent {
  title: string
  description: string
  url: string
  type: string
  images: Array<{ url: string; width: number; height: number; alt: string }>
}

interface Props {
  content: SEOContent
}

const SEO = ({ content }: Props) => {
  //Adding this condition here just so I can observe the page without having to make any implementations yet.
  if (!content) {
    return null
  }
  const { title, description, url, type, images } = content

  return (
    <>
      <Favicons />
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: type,
          url: url,
          images: images,
        }}
      />
    </>
  )
}

export default SEO
