import React from 'react'

const Issues = () => {
  return (
    <div className='container-fluid'>
      <div style={{padding: '2rem'}}></div>
      <div className="header">
        <p className="header-text">Our Vision For A Transformed Kenya</p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
        <div className="col-sm-12 col-md-10 col-lg-10">
          <div>
            <p className='issue-txt'>
            We are commited to promoting and defending the constitutional rights of all Kenyans. We are actively engaged in promoting
            democracy and good governance in the country and we believe that addressing the following is critical to achieving these 
            objectives:
            </p>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8 Issue-list">
          <ul>
            <li>
              <span>Constitutional Rights:</span> We believe that every Kenyan has a right to enjoy the constitutional rights enshrined 
              in the constitution. We are commited to defending these rights and promoting their exercise by all Kenyans.
            </li>
            <li>
              <span>Good governance:</span> We believe that good governance id critical to the success of any democratic society. 
              We are commited to promoting transparency, accoutability and integrity in the managing of public affairs.
            </li>
            <li>
              <span>Empowerment of Women and Youth:</span> We believe in the full participation of the Youth and Women in the 
              governance of the state. We are commited to promoting policies and initiatives that empower these groups and promote
              their participation in the political processes.
            </li>
            <li>
              <span>Corruption:</span> We believe that corruption is a major obstacle to the development of Kenya. We are commited to 
              promoting accountability among leaders and advocating for the policies and initiatives that aim to eliminating corruption.
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
        <div className="col-sm-12 col-md-10 col-lg-10">
          <p className='issue-txt'>
            At the National Transformation Party, we are committed to tackling these and other pressing issues facing Kenya. 
            We believe that by working together, we can create a society that is prosperous, just, and equitable, and that 
            provides opportunities for all Kenyans to reach their full potential. Join us today and be part of the transformation!
          </p>
        </div>
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
      </div>
    </div>
  )
}

export default Issues