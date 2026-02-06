import React, { memo } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './Dropdown.module.css'

import useToggle from '@/customHooks/useToggle'

import DropDownArrow from '@/components/Svgs/DropDownArrow'

const Dropdown = (props: { dropdownTitle: string; dropdownContent: React.ReactNode }) => {
  const { dropdownTitle, dropdownContent } = props
  const [isToggled, toggle] = useToggle(false)
  return (
    <div className={styles.dropdown_container}>
      <Row>
        <Col>
          <div
            className={`${styles.dropdown_title_container} ${isToggled ? `${styles.active_title}` : ''}`}
            onClick={toggle}
          >
            <p className='bold'>{dropdownTitle}</p>
            <DropDownArrow />
          </div>
          <div
            className={`${styles.dropdown_content_container} ${
              isToggled ? `${styles.active_dropdown}` : ''
            }`}
          >
            <p className='bold'>IMPORTANT SAFETY INFORMATION</p>
            {dropdownContent}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default memo(Dropdown)
