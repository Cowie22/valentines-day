'use client'

import React, { memo, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './page.module.css'

import { useAppContext } from '@/contexts/state'

import SignUpForm from '@/components/SignUpForm/SignUpForm'

const SignUp = () => {
  const { updateCurrentPage } = useAppContext()

  useEffect(() => {
    updateCurrentPage('sign-up')
  }, [updateCurrentPage])

  return (
    <section className='top_page_content_container'>
      <section className={styles.sign_up_container}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
              <h1 className='h2 text-center'>Sign up for emails and updates</h1>
              <p>*Required information.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <SignUpForm />
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(SignUp)
