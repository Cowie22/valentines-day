'use client'

import React, { memo, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './page.module.css'

import { useAppContext } from '@/contexts/state'

const ThankYou = () => {
  const { updateCurrentPage } = useAppContext()

  useEffect(() => {
    updateCurrentPage('thak-you')
  }, [updateCurrentPage])

  return (
    <section className='top_page_content_container'>
      <section className={styles.thank_you_container}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
              <h1 className='h2 text-center'>
                Thank you.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(ThankYou)
