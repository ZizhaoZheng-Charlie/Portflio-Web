import MailchimpSubscribe from "react-mailchimp-subscribe"
import Newsletter from "./NewsLetter"
import React from 'react'




function MailChimpForm() {
  const url = `${import.meta.env.REACT_APP_MAILCHIMP_URL}?u=${import.meta.env.REACT_APP_MAILCHIMP_U}&id=${import.meta.env.REACT_APP_MAILCHIMP_ID}`;



  
  
    return (
    <>
        <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}

export default MailChimpForm