import React, { memo, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './SignUpForm.module.css'
import { useRouter } from 'next/navigation'

import FormErrorIcon from '../Svgs/FormErrorIcon'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
  })
  const [consent, setConsent] = useState(false)
  const [submitClicked, handleSubmitClicked] = useState(false)
  const router = useRouter()

  const updateFormData = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target

    // Ensures names only contains letters and length is less than 50
    if ((name === 'firstName' || name === 'lastName') && value.length > 0) {
      const lettersOnly = /^[a-zA-Z]+$/
      const isValid = lettersOnly.test(value)

      if (!isValid || value.length > 50) {
        evt.preventDefault()
        evt.stopPropagation()
        return
      }
    }

    // Ensures zip code only contains numbers and has proper length
    if (name === 'zipCode' && value.length > 0) {
      const numbersOnly = /^\d+$/
      const isValid = numbersOnly.test(value)

      if (!isValid || value.length > 5) {
        evt.preventDefault()
        evt.stopPropagation()
        return
      }
    }

    setFormData({ ...formData, [name]: value })
  }

  const validateEmail = (email: string) => {
    let emailPattern =
      /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailPattern.test(email)
  }

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    handleSubmitClicked(true)

    const form = evt.currentTarget as HTMLFormElement

    if (!validateEmail(formData.email) || form.checkValidity() === false) {
      evt.preventDefault()
      evt.stopPropagation()
    }

    if (form.checkValidity() === true) {
      // alert('Form submitted successfully!')
      handleAddContact('http://localhost:5000/contacts', formData)
      handleSubmitClicked(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
      })
    }
  }

  const handleAddContact = async (
    url: string,
    data: { firstName: string; lastName: string; email: string; zipCode: string },
  ) => {
    const { firstName, lastName, email, zipCode } = data
    let currentData = {
      field_159116931: firstName,
      field_159116932: lastName,
      field_159116938: email,
      field_159116941: zipCode,
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentData),
      })
      const json = await response.json()
      console.log(response.status, json)
      if (response.status === 200 || response.status === 201) {
        router.push('/sign-up/thank-you')
      }
      return json
    } catch (error: any) {
      console.error(error)
      return error
    }
  }

  return (
    <form className={styles.sign_up_form_container} onSubmit={handleSubmit} noValidate>
      <Row>
        <Col lg={{ span: 6 }}>
          <label>
            <p>First Name*</p>
            <div
              className={`${styles.error_container} ${formData.firstName === '' && submitClicked ? 'd-flex' : 'd-none'}`}
            >
              <FormErrorIcon />
              <p>Required field</p>
            </div>
            <input
              type='text'
              name='firstName'
              required
              formNoValidate
              value={formData.firstName}
              onChange={updateFormData}
            />
          </label>
        </Col>
        <Col lg={{ span: 6 }}>
          <label>
            <p>Last Name*</p>
            <div
              className={`${styles.error_container} ${formData.lastName === '' && submitClicked ? 'd-flex' : 'd-none'}`}
            >
              <FormErrorIcon />
              <p>Required field</p>
            </div>
            <input
              type='text'
              name='lastName'
              required
              value={formData.lastName}
              onChange={updateFormData}
            />
          </label>
        </Col>
        <Col lg={{ span: 6 }}>
          <label>
            <p>Email Address*</p>
            <div
              className={`${styles.error_container} ${(formData.email === '' || !validateEmail(formData.email)) && submitClicked ? 'd-flex' : 'd-none'}`}
            >
              <FormErrorIcon />
              {formData.email.length < 1 ? (
                <p>Required field</p>
              ) : (
                <p>Invalid email format (e.g. your_email@domain.com)</p>
              )}
            </div>
            <input
              type='email'
              name='email'
              required
              value={formData.email}
              onChange={updateFormData}
            />
          </label>
        </Col>
        <Col lg={{ span: 6 }}>
          <label>
            <p>Zip Code:</p>
            <input type='text' name='zipCode' value={formData.zipCode} onChange={updateFormData} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 12 }}>
          <div className={styles.consent_copy_container}>
            <label>
              <input
                type='checkbox'
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillu
              </p>
            </label>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }}>
          <div className={styles.submit_btn_container}>
            <button
              type='submit'
              disabled={!consent}
              className={`cta-btn orange-btn ${!consent ? styles.disabled_btn : ''}`}
            >
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </form>
  )
}

export default memo(SignUpForm)
