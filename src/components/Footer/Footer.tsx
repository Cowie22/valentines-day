import React, { memo } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Footer.module.css'

import CompanyLogo from '../Svgs/CompanyLogo'
import PhoneIcon from '../Svgs/PhoneIcon'
import MailIcon from '../Svgs/MailIcon'
import LinkedInLogo from '../Svgs/LinkedInLogo'

const Footer = () => {
  return (
    <footer>
      <section className={styles.footer_container}>
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <nav className={styles.footer_nav_container}>
                <Row>
                  <Col lg={{ span: 3 }} md={{ span: 6 }} xs={{ span: 10 }}>
                    <Link
                      href='/'
                      className={styles.footer_logo_container}
                      aria-label='footer-company-logo-link'
                    >
                      <CompanyLogo />
                    </Link>
                  </Col>
                  <Col xl={{ span: 5, offset: 4 }} lg={{ span: 6, offset: 3 }}>
                    <div className={styles.footer_nav_interior_links_container}>
                      <Link href='/our-story/'>Our Story</Link>
                      <Link href='/our-science/'>Our Science</Link>
                      <Link href='/insights-and-resources/'>Insights and Resources</Link>
                    </div>
                  </Col>
                </Row>
              </nav>
              <Row>
                <Col lg={{ span: 12, order: 1 }} xs={{ span: 12, order: 2 }}>
                  <div className={styles.legal_links_container}>
                    <Link href='/'>Legal Disclaimer</Link>
                    <Link href='/'>Privacy</Link>
                    <Link href='/'>Legal Disclaimer</Link>
                  </div>
                </Col>
                <Col lg={{ span: 12, order: 2 }} xs={{ span: 12, order: 1 }}>
                  <div className={styles.contact_links_container}>
                    <p className='blue'>Contact Us:</p>
                    <a href='' className={styles.icon_link_container}>
                      <PhoneIcon />
                      111-111-1111
                    </a>
                    <a href='' className={styles.icon_link_container}>
                      <MailIcon />
                      test@test.com
                    </a>
                  </div>
                </Col>
              </Row>
              <div className={styles.footer_lower_content_container}>
                <Row>
                  <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                    <p>©2024 Placeholder, Inc. All rights reserved.</p>
                  </Col>
                  <Col lg={{ span: 4, offset: 4, order: 2 }} xs={{ span: 12, order: 1 }}>
                    <div className={styles.social_links_container}>
                      <a
                        href=''
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='footer-linkedIn-logo-link'
                      >
                        <LinkedInLogo />
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  )
}

export default memo(Footer)
