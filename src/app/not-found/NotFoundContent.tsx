'use client'

import React, { memo, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { useAppContext } from '@/contexts/state'
import styles from './page.module.css'

const NotFoundContent = () => {
  const { updateCurrentPage } = useAppContext()

  useEffect(() => {
    updateCurrentPage('not-found')
  }, [updateCurrentPage])

  return (
    <section className='top_page_content_container'>
      <section className={styles.not_found_container}>
        <Container>
          <Row>
            <Col>
              <h1 className='h2'>Page Not Found</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(NotFoundContent)
