import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from './StickySubNav.module.css'

interface StickyNavItem {
  linkText: string
  linkURL: string
}

interface StickySubNavProps {
  stickyNavData: StickyNavItem[]
  activeSection: number
  twoLinks?: boolean
}

const StickySubNav: React.FC<StickySubNavProps> = ({ stickyNavData, activeSection, twoLinks }) => {
  const subNavRef = useRef<HTMLDivElement | null>(null)
  const [isSticky, setSticky] = useState<boolean>(false)
  const [initialOffsetTop, setInitialOffsetTop] = useState<number>(0)

  const handleScroll = useCallback(() => {
    const offsetValue = window.innerWidth <= 991 ? 98 : 110 // 98px for mobile, 110px for desktop
    if (subNavRef.current) {
      setSticky(window.scrollY >= initialOffsetTop - offsetValue)
    }
  }, [initialOffsetTop])

  useEffect(() => {
    if (subNavRef.current) {
      setInitialOffsetTop(subNavRef.current.offsetTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <section className={styles.sticky_sub_nav_container}>
      <Container>
        <Row>
          <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }}>
            <div
              ref={subNavRef}
              className={`${styles.sub_nav} ${isSticky ? `${styles.sticky_sub_nav}` : ''}`}
            >
              <ul className={`${twoLinks} ? ${styles.two_links} : '' `}>
                {stickyNavData.map((item, i) => {
                  const { linkText, linkURL } = item
                  return (
                    <li
                      key={i}
                      className={activeSection === i + 1 ? `${styles.active_sub_nav}` : ''}
                    >
                      <Link href={linkURL}>{linkText}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default StickySubNav
