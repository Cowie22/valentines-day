import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Reference.module.css'

interface ReferenceData {
  page: string
  references: React.ReactNode[]
}

const Reference: React.FC<{ data: ReferenceData }> = ({ data }) => {
  const { page, references } = data

  return (
    <section className={styles.references_list_container}>
      <Container>
        <Row>
          <Col lg={{ span: 11 }}>
            <p className='h5 bold'>References</p>
            <ol>
              {references.map((ref, i) => {
                return <li key={`${page}-${i}`}>{ref}</li>
              })}
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default memo(Reference)
