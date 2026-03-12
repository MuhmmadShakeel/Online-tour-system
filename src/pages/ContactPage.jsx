import React from 'react'
import ContactUs from '../component/usercomponents/contact/ContactUs'
import ContactHeader from '../component/usercomponents/contact/ContactHeader'

function ContactPage() {
  return (
    <div className='overflow-hidden' >
      <ContactHeader />
      <ContactUs/>
    </div>
  )
}

export default ContactPage
