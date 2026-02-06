'use client'

import React, { memo, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from './page.module.css'

import { useAppContext } from '@/contexts/state'

import HeartIcon from '@/components/Svgs/HeartIcon'

const HomeContent = () => {
  const { updateCurrentPage, btnFleeCount, incrementBtnFleeCount, updateInterstitial } =
    useAppContext()
  const noBtnRef = useRef<HTMLButtonElement | null>(null)
  const coolDownRef = useRef(false)
  const coolDownTimerRef = useRef<number | null>(null)

  useEffect(() => {
    updateCurrentPage('home')
  }, [updateCurrentPage])

  useEffect(() => {
    if (btnFleeCount > 5) {
      updateInterstitial(true)
    } else {
      updateInterstitial(false)
    }
  }, [btnFleeCount, updateInterstitial])

  useEffect(() => {
    const COOLDOWN_MS = 450
    const TRIGGER_DISTANCE = 220
    const MIN_DISTANCE_AFTER_JUMP = 180
    const MAX_TRIES = 12
    const padding = 20

    const startCoolDown = () => {
      coolDownRef.current = true
      if (coolDownTimerRef.current) window.clearTimeout(coolDownTimerRef.current)

      coolDownTimerRef.current = window.setTimeout(() => {
        coolDownRef.current = false
      }, COOLDOWN_MS)
    }

    const handleMouseMove = (evt: MouseEvent) => {
      if (coolDownRef.current) return

      const btn = noBtnRef.current
      if (!btn) return

      const rect = btn.getBoundingClientRect()
      const btnCenterX = rect.left + rect.width / 2
      const btnCenterY = rect.top + rect.height / 2

      const distance = Math.hypot(evt.clientX - btnCenterX, evt.clientY - btnCenterY)
      if (distance >= TRIGGER_DISTANCE) return

      const maxX = window.innerWidth - rect.width - padding
      const maxY = window.innerHeight - rect.height - padding

      // Try a few times to find a spot that’s not still near the cursor
      let x = 0
      let y = 0
      let ok = false

      for (let i = 0; i < MAX_TRIES; i++) {
        x = Math.random() * maxX
        y = Math.random() * maxY

        const newCenterX = x + rect.width / 2
        const newCenterY = y + rect.height / 2
        const newDistance = Math.hypot(evt.clientX - newCenterX, evt.clientY - newCenterY)

        if (newDistance >= MIN_DISTANCE_AFTER_JUMP) {
          ok = true
          break
        }
      }

      // If we failed to find a far-enough spot, still move (but cooldown prevents jitter)
      btn.style.position = 'fixed'
      btn.style.left = `${x}px`
      btn.style.top = `${y}px`

      incrementBtnFleeCount()

      startCoolDown()
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (coolDownTimerRef.current) window.clearTimeout(coolDownTimerRef.current)
    }
  }, [])

  return (
    <section className={`${styles.home_container} top_page_content_container`}>
      <section className={styles.home_hero_container}>
        <Container>
          <Row>
            <Col lg={{ span: 12, offset: 0 }}>
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <div className={styles.home_hero_content_container}>
                    <h1 className='hot-pink text-center'>
                      WILL YOU BE <br /> MY VALENTINE?
                    </h1>
                    <Row>
                      <Col lg={{ span: 8, offset: 2 }}>
                        <div className={styles.btn_selection_container}>
                          <div className={styles.btn_container}>
                            <Link href='/sign-up/'>
                              <button className='cta-btn love-btn'>
                                YES
                                <HeartIcon />
                              </button>
                            </Link>
                          </div>
                          <div className={styles.btn_container}>
                            <Link href='/sign-up/'>
                              <button className='cta-btn love-btn' ref={noBtnRef}>
                                NO
                                <HeartIcon />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(HomeContent)
