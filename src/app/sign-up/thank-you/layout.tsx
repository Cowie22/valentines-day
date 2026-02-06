import type { Metadata } from 'next'

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

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
