import React, { memo } from 'react'
import type { Metadata } from 'next'
import NotFoundContent from './not-found/NotFoundContent'

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
  keywords: 'Keywords',
  openGraph: {
    url: '',
    title: 'Title',
    description: 'Description',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Title',
    description: 'Description',
  },
  alternates: {
    canonical: '',
  },
  verification: {
    google: '',
  },
}

const NotFound = () => {
  return <NotFoundContent />
}

export default memo(NotFound)
