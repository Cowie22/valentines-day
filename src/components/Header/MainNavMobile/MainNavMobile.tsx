import React, { useEffect, memo } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './MainNavMobile.module.css'

import useToggle from '@/customHooks/useToggle'

import CompanyLogo from '@/components/Svgs/CompanyLogo'
import DropDownArrow from '@/components/Svgs/DropDownArrow'
import LinkedInLogo from '@/components/Svgs/LinkedInLogo'

const MainNavMobile = () => {
  const [isToggled, toggle] = useToggle(false)
  const [isToggled1, toggle1] = useToggle(false)
  const [isToggled2, toggle2] = useToggle(false)
  const [isToggled3, toggle3] = useToggle(false)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      let body = document.getElementsByTagName('body')[0]
      if (isToggled) {
        body.classList.add('scroll-none')
      } else {
        body.classList.remove('scroll-none')
      }
    }
  }, [isToggled])

  const handleLinkClicked = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    toggledState: boolean,
  ) => {
    if (!toggledState) {
      e.preventDefault()
    }
  }

  return (
    <section className={styles.main_nav_mobile_container}>
      <section className={styles.mobile_header_container}>
        <Container>
          <Row>
            <Col xs={{ span: 12 }}>
              <Row>
                <Col xs={{ span: 6 }}>
                  <div className={styles.logo_container} onClick={isToggled ? toggle : undefined}>
                    <Link href='/' aria-label='header-logo-nav'>
                      <CompanyLogo />
                    </Link>
                  </div>
                </Col>
                <Col xs={{ span: 2, offset: 4 }}>
                  <div className={styles.toggle_container}>
                    <svg
                      className={`${styles.hamburger_icon} ${isToggled ? `${styles.active}` : ''}`}
                      viewBox='0 0 79 48'
                      width='54'
                      height='40'
                      onClick={toggle}
                    >
                      <path
                        className={`${styles.line} ${styles.top}`}
                        d='m 20,8 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -35'
                      />
                      <path className={`${styles.line} ${styles.middle}`} d='m 20,25 h 40' />
                      <path
                        className={`${styles.line} ${styles.bottom}`}
                        d='m 60,42 h -54 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
                      />
                    </svg>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={`${styles.mobile_nav_dropdown_container} ${isToggled ? `${styles.active_dropdown}` : ''}`}
      >
        <Container>
          <Row>
            <Col xs={{ span: 12 }}>
              <nav className={styles.mobile_nav_container}>
                <div className={styles.item_container}>
                  <div
                    className={`${styles.item_header_container} ${isToggled1 ? `${styles.active_header}` : ''}`}
                    onClick={toggle1}
                  >
                    <Link
                      href='/our-story/'
                      onClick={(e) => {
                        handleLinkClicked(e, isToggled1)
                        if (isToggled1) {
                          toggle()
                        }
                      }}
                    >
                      Our Story
                    </Link>
                    <DropDownArrow />
                  </div>
                  <ul
                    className={`${styles.item_inner_dropdown_container} ${isToggled1 ? `${styles.active_dropdown}` : ''}`}
                  >
                    <li>
                      <Link href='/our-story#commitment-to-research' onClick={toggle}>
                        Commitment to research
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-story#expanding-access' onClick={toggle}>
                        Expanding access
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-story#advocacy-and-outreach' onClick={toggle}>
                        Advocacy and outreach
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.item_container}>
                  <div
                    className={`${styles.item_header_container} ${isToggled2 ? `${styles.active_header}` : ''}`}
                    onClick={toggle2}
                  >
                    <Link
                      href='/our-science/'
                      onClick={(e) => {
                        handleLinkClicked(e, isToggled2)
                        if (isToggled2) {
                          toggle()
                        }
                      }}
                    >
                      Our Science
                    </Link>
                    <DropDownArrow />
                  </div>
                  <ul
                    className={`${styles.item_inner_dropdown_container} ${isToggled2 ? `${styles.active_dropdown}` : ''}`}
                  >
                    <li>
                      <Link href='/our-science#currently-available' onClick={toggle}>
                        Currently available
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-science#our-pipeline' onClick={toggle}>
                        Our pipeline
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.item_container}>
                  <div
                    className={`${styles.item_header_container} ${isToggled3 ? `${styles.active_header}` : ''}`}
                    onClick={toggle3}
                  >
                    <Link
                      href='/insights-and-resources/'
                      onClick={(e) => {
                        handleLinkClicked(e, isToggled3)
                        if (isToggled3) {
                          toggle()
                        }
                      }}
                    >
                      Insights and Resources
                    </Link>
                    <DropDownArrow />
                  </div>
                  <ul
                    className={`${styles.item_inner_dropdown_container} ${isToggled3 ? `${styles.active_dropdown}` : ''}`}
                  >
                    <li>
                      <Link href='/insights-and-resources#training' onClick={toggle}>
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link href='/insights-and-resources#access-support' onClick={toggle}>
                        Access support
                      </Link>
                    </li>
                    <li>
                      <Link href='/insights-and-resources#webinars' onClick={toggle}>
                        Webinars
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.header_btn_container}>
                  <Link href='/sign-up/' onClick={toggle}>
                    <button className='cta-btn orange-btn btn-full'>Sign Up</button>
                  </Link>
                </div>

                <div className={styles.header_social_container}>
                  <p className='white'>Follow us</p>
                  <a
                    href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='mobile-nav-linkedIn-logo-link'
                  >
                    <LinkedInLogo />
                  </a>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(MainNavMobile)
