import { memo } from 'react'

const FormErrorIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='14px'
      height='14px'
      viewBox='0 0 1000 1000'
      xmlSpace='preserve'
    >
      <path
        fill='#ff3C3C'
        d='M499.7 0C223.6 0 0 223.6 0 499.7S223.6 1000 499.7 1000 1000 776.4 1000 499.7C1000 223.6 776.4 0 499.7 0zm.6 775c-41.6 0-75-33.4-75-75s33.4-75 75-75 75 33.4 75 75-33.4 75-75 75zM574 488c0 41.4-33.6 75-75 75s-75-33.6-75-75V263c0-41.4 33.6-75 75-75s75 33.6 75 75v225z'
      />
    </svg>
  )
}

export default memo(FormErrorIcon)
