import { memo } from 'react'

const HeartIcon = () => {
  return (
    <svg width={22} height={22} viewBox='0 0 24 24' fill='none'>
      <path d='M12 21s-7-4.6-9.5-8c-1.7-2.5-.5-6.2 3-6.8 2.2-.4 3.7.8 4.5 1.9.8-1.1 2.3-2.3 4.5-1.9 3.5.6 4.7 4.3 3 6.8C15 16.4 8 21 8 21z' />
    </svg>
  )
}

export default memo(HeartIcon)
