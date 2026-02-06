'use client'

import React, { memo, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from './page.module.css'

import { useAppContext } from '@/contexts/state'
import SignUpCallout from '@/components/SignUpCallout/SignUpCallout'

const HomeContent = () => {
  const { updateCurrentPage } = useAppContext()

  useEffect(() => {
    updateCurrentPage('home')
  }, [updateCurrentPage])

  return (
    <section className={`${styles.home_container} top_page_content_container`}>
      <section className={styles.home_hero_container}>
        <Container>
          <Row>
            <Col
              xl={{ span: 4, offset: 0 }}
              lg={{ span: 4, offset: 8 }}
              xs={{ span: 11, offset: 1 }}
            >
              <div className={styles.home_hero_content_container}>
                <h1 className='orange'>
                  LoremIpsum.
                  <br />
                  LoremIpsum.
                  <br />
                  LoremIpsum.
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SignUpCallout />
    </section>
  )
}

export default memo(HomeContent)
