'use client'

import React, { memo, useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from './page.module.css'

import { useAppContext } from '@/contexts/state'

import HeartIcon from '@/components/Svgs/HeartIcon'

const HomeContent = () => {
  const { updateCurrentPage, btnFleeCount, incrementBtnFleeCount, updateInterstitial } =
    useAppContext()
  const [accepted, setAccepted] = useState(false)
  const noBtnRef = useRef<HTMLButtonElement | null>(null)
  const coolDownRef = useRef(false)
  const coolDownTimerRef = useRef<number | null>(null)
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null)

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
    const TRIGGER_DISTANCE = 150
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

  useEffect(() => {
    if (!accepted) return

    const canvas = confettiCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type Piece = {
      x: number
      y: number
      vx: number
      vy: number
      w: number
      h: number
      rot: number
      vr: number
      color: string
      settled: boolean
    }

    const pieces: Piece[] = []

    // 🎭 DRAMA SETTINGS
    const EMIT_DURATION_MS = 70000 // keep emitting for 7s
    const EMIT_RATE_PER_FRAME = 100 // how many new pieces per frame while emitting
    const MAX_PIECES = 20000 // cap for performance
    const GRAVITY = 0.22
    const WIND = 0.02 // subtle drift
    const FLOOR_BOUNCE = 0.22 // tiny bounce before settling
    const FLOOR_FRICTION = 0.86 // makes them slide a bit then stop
    const SETTLE_VY_THRESHOLD = 1.1 // if slow enough at bottom -> settle
    const SPREAD = 14 // initial sideways spread
    const UP_FORCE = 14 // initial upward force

    const colors = ['#ff3b6b', '#ff6f91', '#ffc2d1', '#fff6e9', '#5a3d5c', '#ff4fa3']

    const rand = (min: number, max: number) => Math.random() * (max - min) + min
    const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]

    // spawn from top center-ish
    const spawn = (count: number) => {
      for (let i = 0; i < count; i++) {
        if (pieces.length >= MAX_PIECES) return

        const big = Math.random() < 0.45
        const w = big ? rand(16, 28) : rand(10, 18)
        const h = big ? rand(10, 18) : rand(6, 12)

        pieces.push({
          x: canvas.width / 2 + rand(-40, 40),
          y: canvas.height * 0.18 + rand(-20, 20),
          vx: rand(-SPREAD, SPREAD),
          vy: rand(-UP_FORCE, -6),
          w,
          h,
          rot: rand(0, Math.PI),
          vr: rand(-0.18, 0.18),
          color: pick(colors),
          settled: false,
        })
      }
    }

    // optional: first big burst + a second burst a bit later
    spawn(220)
    const burst2 = window.setTimeout(() => spawn(180), 650)
    const burst3 = window.setTimeout(() => spawn(140), 1200)

    const start = performance.now()
    let raf = 0

    const draw = () => {
      const now = performance.now()
      const emitting = now - start < EMIT_DURATION_MS

      if (emitting) {
        // emit continuously
        spawn(EMIT_RATE_PER_FRAME)
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const floor = canvas.height - 8

      for (const p of pieces) {
        if (!p.settled) {
          // physics
          p.vy += GRAVITY
          p.vx += WIND * (Math.sin(now / 450) * 0.8) // gentle wind oscillation
          p.x += p.vx
          p.y += p.vy
          p.rot += p.vr

          // wrap horizontally a bit so it stays on screen
          if (p.x < -50) p.x = canvas.width + 50
          if (p.x > canvas.width + 50) p.x = -50

          // floor collision -> bounce then settle
          if (p.y + p.h / 2 >= floor) {
            p.y = floor - p.h / 2

            // bounce a little, then lose energy
            p.vy = -p.vy * FLOOR_BOUNCE
            p.vx *= FLOOR_FRICTION

            // if basically stopped -> settle (pile)
            if (Math.abs(p.vy) < SETTLE_VY_THRESHOLD) {
              p.vy = 0
              p.vx = 0
              p.settled = true
            }
          }
        }

        // draw rounded rect confetti
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color

        const r = Math.min(3, p.h / 2)
        const w = p.w
        const h = p.h

        ctx.beginPath()
        ctx.moveTo(-w / 2 + r, -h / 2)
        ctx.lineTo(w / 2 - r, -h / 2)
        ctx.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r)
        ctx.lineTo(w / 2, h / 2 - r)
        ctx.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2)
        ctx.lineTo(-w / 2 + r, h / 2)
        ctx.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r)
        ctx.lineTo(-w / 2, -h / 2 + r)
        ctx.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }

      // keep animating while emitting OR while any piece is not settled
      const anyMoving = pieces.some((p) => !p.settled)
      if (emitting || anyMoving) {
        raf = window.requestAnimationFrame(draw)
      } else {
        // leave the “pile” visible (don’t clear)
        // ctx stays as last frame
      }
    }

    draw()

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.clearTimeout(burst2)
      window.clearTimeout(burst3)
    }
  }, [accepted])

  const handleYes = () => {
    if (accepted) return
    setAccepted(true)
  }

  return (
    <section className={`${styles.home_container} top_page_content_container`}>
      <section className={styles.home_hero_container}>
        <Container>
          <Row>
            <Col lg={{ span: 12, offset: 0 }}>
              <canvas ref={confettiCanvasRef} className={styles.confetti_canvas} />
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <div
                    className={`${styles.home_hero_content_container} ${accepted ? styles.accepted : ''}`}
                  >
                    <div className={styles.title_container}>
                      <h1 className='plum text-center'>
                        {accepted ? (
                          <>
                            YAY!! <br /> IT’S A DATE 💖
                          </>
                        ) : (
                          <>
                            WILL YOU BE <br /> MY VALENTINE?
                          </>
                        )}
                      </h1>
                    </div>
                    <Row>
                      <Col lg={{ span: 8, offset: 2 }}>
                        <div className={styles.btn_selection_container}>
                          <div className={styles.btn_container}>
                            <button
                              className='cta-btn love-btn'
                              onClick={handleYes}
                              disabled={accepted}
                            >
                              YES
                              <HeartIcon />
                            </button>
                          </div>
                          <div className={styles.btn_container}>
                            <button className='cta-btn love-btn' ref={noBtnRef} disabled={true}>
                              NO
                              <HeartIcon />
                            </button>
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
