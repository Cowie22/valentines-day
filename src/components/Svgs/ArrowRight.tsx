import { memo } from 'react'

const ArrowRight = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} viewBox='0 0 768 768'>
      <path
        d='M310.624 598.624l192-192c12.512-12.512 12.512-32.768 0-45.248l-192-192c-12.512-12.512-32.768-12.512-45.248 0s-12.512 32.768 0 45.248L434.752 384 265.376 553.376c-12.512 12.512-12.512 32.768 0 45.248s32.768 12.512 45.248 0z'
        fill='#FFFFFF'
        stroke='#FFFFFF'
        strokeWidth='20'
      />
    </svg>
  )
}

export default memo(ArrowRight)
