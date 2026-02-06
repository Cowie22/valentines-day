import { memo } from 'react'

const DropDownArrow = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={14} height={22} viewBox='0 0 288 448'>
      <path
        d='M268.75 184c0 2-1 4.25-2.5 5.75l-116.5 116.5c-1.5 1.5-3.75 2.5-5.75 2.5s-4.25-1-5.75-2.5l-116.5-116.5c-1.5-1.5-2.5-3.75-2.5-5.75s1-4.25 2.5-5.75l12.5-12.5c1.5-1.5 3.5-2.5 5.75-2.5 2 0 4.25 1 5.75 2.5L144 264l98.25-98.25c1.5-1.5 3.75-2.5 5.75-2.5s4.25 1 5.75 2.5l12.5 12.5c1.5 1.5 2.5 3.75 2.5 5.75z'
        fill='#FFFFFF'
      />
    </svg>
  )
}

export default memo(DropDownArrow)
