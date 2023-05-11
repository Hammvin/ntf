import React from 'react'

const News = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div style={{padding: '3rem'}}></div>
        <div className="header">
          <p className="header-text">News</p>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div>
            <p className='news-item'>
              We are pleased to announce the upcoming launch of the National Transformation Party, 
              a new political party committed to transforming Kenya and building a better future for all Kenyans.
            </p>
          </div>
          <div>
            <p className='news-item'>
              Our party has been established in response to the urgent need for bold, visionary leadership that can tackle the 
              pressing issues facing our country. We believe that Kenya has the potential to become a prosperous, just, 
              and equitable society, but this will require fundamental changes in our political and economic systems.
            </p>
          </div>
          <div>
            <p className='news-item'>
              In the coming weeks, we will be launching our party and sharing our vision and policy proposals with the public. 
              Our agenda will focus on key issues such as economic transformation, education and skills development, 
              health and wellbeing, infrastructure development, good governance and accountability, and environmental sustainability.
            </p>
          </div>
          <div>
            <p className='news-item'>
              We believe that by working together and mobilizing grassroots support, we can bring about the transformative change 
              that Kenya needs. We are committed to building a diverse and inclusive party that reflects the rich cultural and 
              ethnic diversity of our country, and that is rooted in the values of justice, equality, and solidarity.
            </p>
          </div>
          <div>
            <p className='news-item'>
              Stay tuned for more updates on the launch of the National Transformation Party. In the meantime, 
              we invite you to join us and be part of the transformation! Together, we can build a better future for all Kenyans.
            </p>
          </div>
          <br /><br />
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
      <div className="close"></div>
    </div>
  )
}

export default News