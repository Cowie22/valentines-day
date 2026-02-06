import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Header.module.css'

import MainNav from './MainNav/MainNav'
import MainNavMobile from './MainNavMobile/MainNavMobile'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <section className={styles.header_upper_banner_container}>
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className={styles.banner_content_container}>
                <p>THIS SITE IS FOR US RESIDENTS ONLY</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className='d-none d-lg-block'>
        <MainNav />
      </div>
      <div className='d-block d-lg-none'>
        <MainNavMobile />
      </div>
    </header>
  )
}

export default memo(Header)
