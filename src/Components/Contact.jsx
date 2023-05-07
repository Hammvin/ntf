import React from 'react'

const Contact = () => {
  

  return (
    <div className='container-fluid'>
      <div style={{padding: '2rem'}}></div>
      <div className='header'>
        <p className='header-text'>Contact US</p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <p className='contact-txt'>
           We welcome your feedback and inquiries. If you have any questions or concerns, please feel free to contact us using the 
           information provided below:
          </p>
          <div className='contact'>
            <ul>
              <li>
                <p><span className='contact-items'>Address: <br /></span> Runda Meadows 486, <br />P.O BOX 4101 - 00100, <br /> Nairobi.</p> 
              </li>
              <li>
                <span className='contact-items'>Phone: </span> (+254) 790 987 149 | (+254) 756 712 200
              </li>
              <li>
                <span className='contact-items'>Email: </span> info@ntpkenya.com
              </li>
            </ul>
          </div>
          <p className='contact-txt'>
            You can also reach follow us on social media for updates and news on our handles below the page.
          </p>
          <p className='contact-txt'>
            Join the National Transformation Party (NTP) and be part of a movement committed to creating a better future. 
            Dial *509# and select NTP to register. Before joining, use *509# to resign from your current political party. 
            As a member, you can participate in party activities and contribute your ideas to our policy platform. 
            Join us today and help build a brighter future for ourselves and future generations.
          </p>
          <br />
          <hr />
          <br /> 
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
      <br /><br />
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
        <p className='contact-txt'>
            Thank you for your interest in our party. We look forward to hearing from you.
          </p>
          <br /><br />
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
    </div>
  )
}

export default Contact