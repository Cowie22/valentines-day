import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './HeroBanner.module.css'

const HeroBanner = (props: { imgURL: string; title: string }) => {
  const { imgURL, title } = props
  return (
    <section
      className={styles.hero_banner_container}
      style={{
        backgroundImage: `
          -webkit-image-set(${imgURL}), 
          image-set(${imgURL})
        `,
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className={styles.hero_banner_title_container}>
              <h1 className='white h3'>{title}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default memo(HeroBanner)
