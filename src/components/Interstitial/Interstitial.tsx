import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useAppContext } from '@/contexts/state'
import styles from './Interstitial.module.css'

const Interstitial: React.FC = () => {
  const { interstitialVisible, updateInterstitial, resetBtnFleeCount } = useAppContext()

  if (!interstitialVisible) {
    return null
  }

  return (
    <section className={styles.interstitial_overlay_container}>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className={styles.interstitial_container}>
              <h1 className='heart text-center'>
                SAY NO ONE MORE TIME!
              </h1>
              <div className={styles.btn_container}>
                <button
                  className='cta-btn orange-btn'
                  onClick={() => {
                    updateInterstitial(false)
                    resetBtnFleeCount()
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Interstitial
