'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './page.module.css'

import { useAppContext } from '@/contexts/state'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
import SignUpCallout from '@/components/SignUpCallout/SignUpCallout'
import StickySubNav from '@/components/StickySubNav/StickySubNav'
import CompanyLogoLink from '@/components/CompanyLogoLink/CompanyLogoLink'
import CompanyLogoLinkData from '@/components/CompanyLogoLink/CompanyLogoLinkData'
import Reference from '@/components/Reference/Reference'
import { ReferenceDataOurStory } from '@/components/Reference/ReferencesData'

const OurStory = () => {
  const { updateCurrentPage } = useAppContext()
  const [activeSection, setActiveSection] = useState<number>(0)
  const sectionRef1 = useRef<HTMLDivElement | null>(null)
  const sectionRef2 = useRef<HTMLDivElement | null>(null)
  const sectionRef3 = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    updateCurrentPage('our-story')
  }, [updateCurrentPage])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef1.current && sectionRef2.current && sectionRef3.current) {
        const sectionTop1 = sectionRef1.current.getBoundingClientRect().top - 150
        const sectionTop2 = sectionRef2.current.getBoundingClientRect().top - 150
        const sectionTop3 = sectionRef3.current.getBoundingClientRect().top - 150

        if (sectionTop1 > 0) {
          setActiveSection(0)
        } else if (sectionTop2 > 0) {
          setActiveSection(1)
        } else if (sectionTop3 > 0) {
          setActiveSection(2)
        } else {
          setActiveSection(3)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className={`${styles.our_story_container} top_page_content_container`}>
      <HeroBanner
        imgURL='
          url(/img/components/HeroBanner/hero-banner-our-story.webp) 1x,
          url(/img/components/HeroBanner/hero-banner-our-story.jpg) 1x
        '
        title='Our Story'
      />

      <StickySubNav
        stickyNavData={[
          {
            linkText: 'Commitment to research',
            linkURL: '/our-story#commitment-to-research',
          },
          {
            linkText: 'Expanding access',
            linkURL: '/our-story#expanding-access',
          },
          {
            linkText: 'Advocacy and outreach',
            linkURL: '/our-story#advocacy-and-outreach',
          },
        ]}
        activeSection={activeSection}
      />

      <section className={styles.commitment_to_research_container}>
        <Container>
          <Row>
            <Col>
              <div className={styles.upper_content_container}>
                <Row>
                  <Col lg={{ span: 6, offset: 3 }}>
                    <h2 className='orange text-center'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col lg={{ span: 8, offset: 2 }}>
                    <h3>
                      tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequ
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <section
          className={`${styles.advancing_research_container} scroll_to_container`}
          id='commitment-to-research'
          ref={sectionRef1}
        >
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col xl={{ span: 4 }} lg={{ span: 5 }}>
                    <h2 className='orange'>Advancing research</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <section
        className={`${styles.expanding_access_container} scroll_to_container`}
        id='expanding-access'
        ref={sectionRef2}
      >
        <Container>
          <Row>
            <Col>
              <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                  <h2 className='orange text-center'>EXPANDING ACCESS</h2>
                  <h3 className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex e
                  </h3>
                  <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex e
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={`${styles.advocacy_and_outreach_container} scroll_to_container`}
        id='advocacy-and-outreach'
        ref={sectionRef3}
      >
        <Container>
          <Row>
            <Col>
              <div className={styles.advocacy_and_outreach_logo_container}>
                <Row>
                  {CompanyLogoLinkData.map((data, i) => {
                    return (
                      <React.Fragment key={i}>
                        <CompanyLogoLink data={data} />
                      </React.Fragment>
                    )
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <SignUpCallout />

      <Reference data={ReferenceDataOurStory} />
    </section>
  )
}

export default OurStory
