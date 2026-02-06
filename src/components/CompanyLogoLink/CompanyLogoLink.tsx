import React, { memo } from 'react'
import { Col } from 'react-bootstrap'
import Image from 'next/image'
import styles from './CompanyLogoLink.module.css'

interface CompanyLogoLinkItem {
  CompanyLogo: React.ComponentType
  linkUrl: string
  ariaLabel: string
}

const CompanyLogoLink: React.FC<{ data: CompanyLogoLinkItem }> = ({ data }) => {
  const { CompanyLogo, linkUrl, ariaLabel } = data

  return (
    <Col lg={{ span: 3 }} md={{ span: 6 }}>
      <a
        href={linkUrl}
        className={styles.company_logo_container}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={ariaLabel}
      >
        <CompanyLogo />
      </a>
    </Col>
  )
}

export default memo(CompanyLogoLink)
