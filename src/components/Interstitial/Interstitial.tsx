import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useAppContext } from '@/contexts/state'
import styles from './Interstitial.module.css'

const Interstitial: React.FC = () => {
  const { interstitialVisible, hideInterstitial } = useAppContext()

  if (!interstitialVisible) {
    return null
  }

  return (
    <section className={styles.interstitial_overlay_container}>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className={styles.interstitial_container}>
              <p className='black bold text-center'>
                The information contained in this site is intended for US healthcare professionals
                only.
              </p>
              <p className='black bold text-center'>
                Click OK below if you are a US healthcare professional.
              </p>
              <div className={styles.btn_container}>
                <button className='cta-btn orange-btn' onClick={hideInterstitial}>
                  OK
                </button>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <button className='cta-btn orange-btn'>Cancel</button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Interstitial
