import Link from 'next/link'
import * as styles from './Navigation.css'
// import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'

const Navigation = () => {
  // const router = useRouter()
  // const { pathname } = router

  const { y } = useWindowScroll()
  const [isHidden, setIsHidden] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
  const scrollRef = useRef<number>(0)
  const offSet = 50

  useEffect(() => {
    if (y <= 0) {
      setIsHidden(false)
      setShowBackground(false)
    } else {
      if (y > offSet && scrollRef.current < y) {
        setIsHidden(true)
        setShowBackground(false)
      } else {
        setIsHidden(false)
        setShowBackground(true)
      }
    }
    scrollRef.current = y
  }, [y])

  // const linkStyle = (link: string) =>
  //   link === pathname ? `${styles.active}` : undefined

  return (
    <header className={styles.header({ isHidden, showBackground })}>
      <nav>
        <div className={styles.nav}>
          <div className={styles.wrapper}>
            <li className={styles.item}>
              <Link href="/" className={styles.logo}>
                <img src="/img/nav/logo-with-text-header.svg" alt="logo" />
              </Link>
            </li>
            <div className={styles.links}>
              <li className={styles.item}>
                <Link href="/about" scroll={true}>
                  About
                </Link>
              </li>
              {/*<li className={styles.item}>*/}
              {/*  <Link href="/about" className={linkStyle('/about')}>*/}
              {/*    About Us*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li className={styles.item}>*/}
              {/*  <Link href="/blog" className={linkStyle('/blog')}>*/}
              {/*    Blog*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li className={styles.item}>
                <Link href={'#contact'} scroll={false}>
                  <button className={styles.button}>Contact</button>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
