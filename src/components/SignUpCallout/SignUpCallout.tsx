import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from './SignUpCallout.module.css'

import ArrowRight from '../Svgs/ArrowRight'

const SignUpCallout = () => {
  return (
    <section className={styles.sign_up_callout_container}>
      <Container>
        <Row>
          <Col>
            <div className={styles.sign_up_callout_content_container}>
              <h2 className='text-center'>Sign up for emails and updates</h2>
              <Link href='/sign-up/'>
                <button className='cta-btn blue-btn'>
                  Sign up
                  <ArrowRight />
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default memo(SignUpCallout)
