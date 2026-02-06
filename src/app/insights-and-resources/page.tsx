'use client'

import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from './page.module.css'

import { useAppContext } from '@/contexts/state'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
import SignUpCallout from '@/components/SignUpCallout/SignUpCallout'

import CircleArrowRight from '@/components/Svgs/CircleArrowRight'

const InsightsAndResources = () => {
  const { updateCurrentPage } = useAppContext()

  useEffect(() => {
    updateCurrentPage('insights-and-resources')
  }, [updateCurrentPage])

  return (
    <section className={`${styles.insights_and_resources_container} top_page_content_container`}>
      <HeroBanner
        imgURL='
          url(/img/components/HeroBanner/hero-banner-insights-and-resources.webp) 1x,
          url(/img/components/HeroBanner/hero-banner-insights-and-resources.jpg) 1x
        '
        title='Insights And Resources'
      />

      <section className={`${styles.training_container} scroll_to_container`} id='training'>
        <Container>
          <Row>
            <Col>
              <div className={styles.training_content_container}>
                <Row>
                  <Col
                    xs={{ span: 12, offset: 0, order: 2 }}
                    md={{ span: 12, offset: 0, order: 2 }}
                    lg={{ span: 6, offset: 0, order: 1 }}
                  >
                    <div className={styles.content_container}>
                      <h2 className='orange'>Image interpretation training</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={`${styles.access_support_container} scroll_to_container`}
        id='access-support'
      >
        <Container>
          <Row>
            <Col>
              <Row>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 5, order: 1 }}></Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, offset: 1 }}>
                  <div className={styles.content_container}>
                    <h2 className='orange'>Access Information and Support</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className='bold'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </Col>
              </Row>
              <div className={styles.bottom_content_container}>
                <p className='text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliq
                </p>
                <p className='h5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.webinars_container} scroll_to_container`} id='webinars'>
        <Container>
          <Row>
            <Col>
              <div className={styles.webinars_content_container}>
                <Row>
                  <Col lg={{ span: 6 }}>
                    <div className={styles.content_container}>
                      <h2 className='orange'>Webinars</h2>
                      <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna
                      </h3>
                      <Link href='/'>
                        <CircleArrowRight />
                        View webinar here
                      </Link>

                      <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna
                      </p>
                      <Link href='/'>
                        <CircleArrowRight />
                        View webinar here
                      </Link>

                      <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna
                      </h3>
                      <Link href='/'>
                        <CircleArrowRight />
                        View webinar here
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <SignUpCallout />
    </section>
  )
}

export default InsightsAndResources
