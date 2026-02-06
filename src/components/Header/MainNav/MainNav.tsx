import React, { memo, useState } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { useAppContext } from '@/contexts/state'
import styles from './MainNav.module.css'

import CompanyLogo from '@/components/Svgs/CompanyLogo'

const MainNav = () => {
  const { currentPage } = useAppContext()

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleNavClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <section className={styles.main_nav}>
      <section className={styles.navigation_container}>
        <Container>
          <Row>
            <Col lg={{ span: 3, offset: 0 }}>
              <div className={styles.header_logo_container}>
                <Link href='/' aria-label='header-logo-nav'>
                  <CompanyLogo />
                </Link>
              </div>
            </Col>
            <Col lg={{ span: 8, offset: 1 }}>
              <nav className={styles.nav_container}>
                <div className={styles.nav_item_container}>
                  <div
                    className={styles.nav_item_inner_container}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => handleMouseEnter('our-story')}
                  >
                    <Link
                      href='/our-story/'
                      className={currentPage === 'our-story' ? `${styles.active_page}` : ''}
                      onClick={() => handleNavClick('our-story')}
                    >
                      Our Story
                    </Link>
                    <ul
                      className={`${styles.nav_dropdown_container} ${
                        activeDropdown === 'our-story' ? '' : styles.nav_dropdown_hidden
                      }`}
                    >
                      <li>
                        <Link href='/our-story#commitment-to-research' onClick={handleMouseLeave}>
                          Commitment to research
                        </Link>
                      </li>
                      <li>
                        <Link href='/our-story#expanding-access' onClick={handleMouseLeave}>
                          Expanding access
                        </Link>
                      </li>
                      <li>
                        <Link href='/our-story#advocacy-and-outreach' onClick={handleMouseLeave}>
                          Advocacy and outreach
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className={styles.nav_item_inner_container}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => handleMouseEnter('our-science')}
                  >
                    <Link
                      href='/our-science/'
                      className={currentPage === 'our-science' ? `${styles.active_page}` : ''}
                      onClick={() => handleNavClick('our-science')}
                    >
                      Our Science
                    </Link>
                    <ul
                      className={`${styles.nav_dropdown_container} ${
                        activeDropdown === 'our-science' ? '' : styles.nav_dropdown_hidden
                      }`}
                    >
                      <li>
                        <Link href='/our-science#currently-available' onClick={handleMouseLeave}>
                          Currently available
                        </Link>
                      </li>
                      <li>
                        <Link href='/our-science#our-pipeline' onClick={handleMouseLeave}>
                          Our pipeline
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className={styles.nav_item_inner_container}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => handleMouseEnter('insights-and-resources')}
                  >
                    <Link
                      href='/insights-and-resources/'
                      className={
                        currentPage === 'insights-and-resources' ? `${styles.active_page}` : ''
                      }
                      onClick={() => handleNavClick('insights-and-resources')}
                    >
                      Insights and Resources
                    </Link>
                    <ul
                      className={`${styles.nav_dropdown_container} ${
                        activeDropdown === 'insights-and-resources'
                          ? ''
                          : styles.nav_dropdown_hidden
                      }`}
                    >
                      <li>
                        <Link href='/insights-and-resources#training' onClick={handleMouseLeave}>
                          Training
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/insights-and-resources#access-support'
                          onClick={handleMouseLeave}
                        >
                          Access support
                        </Link>
                      </li>
                      <li>
                        <Link href='/insights-and-resources#webinars' onClick={handleMouseLeave}>
                          Webinars
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link href='/sign-up/' className={styles.header_btn}>
                    <button className='cta-btn orange-btn'>Sign Up</button>
                  </Link>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(MainNav)
