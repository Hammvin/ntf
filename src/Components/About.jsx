import React from 'react'

const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2"></div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div style={{padding: '2rem'}}></div>
            <div className="header">
              <p className='header-text'>About NTP</p>
            </div>
            <div className="about-body">
              <p className='about-text'>
                Welcome to the National Transformation Party (NTP), a political party dedicated to transforming our country to a just, 
                equal and prosperous society. The NTP was formed by a group of passionate citizens who are committed to positive changes
                through inclusive and collaborative efforts.
              </p>
              <br></br>
              <p className='about-text'>
                Our mission is to bring about transformative changes by conceiving and championing progressive policies, fostering democracy 
                through robust debates and grassroots consultations.
              </p>
              <br></br>
              <p className='about-text'>
                We believe in citizens’ participation,transparency and accountability in all our activities. 
                The NTP encourages all our members to engage actively in our political activities and decision-making processes.
              </p>
              <br></br>
              <p className='about-text'>
                NTP's core values are rooted in social justice, environmental sustainability, 
                and economic prosperity. We believe that an equitable society where all citizens has access to equal opportunities 
                and basic necessities such as healthcare, education, and housing is the foundation for good governance. 
              </p>
              <br></br>
              <p className='about-text'>
                To achieve our goals, we have developed a comprehensive platform that outlines our policies on various issues affecting Kenya. 
                Our platform is constantly evolving based on the feedback and suggestions of our members and stakeholders.
                Join us to transform our Kenya for the better. 
                Become a member of the National Transformation Party today and help us build a better future for all.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2"></div>
        </div>

        <div >
              <p className='aboutIssues'><span>Issues:</span></p>
        </div>
        <hr />
        <div className="container-fluid Issues-list">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div>
                <p className='issue-head'>1. Health:</p>
              </div>
              <ul className='Issue-group issue-border'>
                <li>Provide universal healthcare.</li>
                <li>Improve healthcare infrastructure.</li>
                <li>Address disparities in access to quality healthcare.</li>
                <li>Increase investment in public health.</li>
                <li>Promote preventive healthcare measures.</li>
                <li>Address the opioid epidemic.</li>
                <li>Improve mental healthcare services.</li>
                <li>Ensure access to reproductive healthcare.</li>
                <li>Promote research into emerging diseases.</li>
                <li>Increase availability of vaccines.</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div>
                <p className='issue-head'>2. Education:</p>
              </div>
              <ul className='Issue-group issue-border'>
                <li>Improve access to quality education.</li>
                <li>Reduce educational inequality.</li>
                <li>Increase investment in public schools.</li>
                <li>Promote vocational education and training programs.</li>
                <li>Improve access to higher education.</li>
                <li>Address student loan debt.</li>
                <li>Promote programs for early childhood education.</li>
                <li>Improve conditions of teachers’ service including salaries and other benefits.</li>
                <li>Make all educational institutions in both urban and rural areas digital</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div>
                <p className='issue-head'>3. Poverty:</p>
              </div>
              <ul className='Issue-group'>
                <li>Alleviate poverty and work towards its eradication.</li>
                <li>Promote economic opportunities especially among the Youth</li>
                <li>Reduce income inequality.</li>
                <li>Increase investment in social services.</li>
                <li>Provide adequate and humane affordable housing.</li>
                <li>Promote financial literacy and access to credit.</li>
                <li>Strengthen the social safety net.</li>
                <li>Introduce liveable minimum wage.</li>
                <li>Promote job training programs.</li>
                <li>Address food insecurity</li>
              </ul>
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div>
                <p className='issue-head'>4. Youth Empowerment:</p>
              </div>
              <ul className='Issue-group issue-border'>
                <li>Increase youth participation in decision-making processes.</li>
                <li>Promote access to economic and social opportunities.</li>
                <li>Provide job training and mentorship programs.</li>
                <li>Solve youth homelessness.</li>
                <li>Promote youth representation in government.</li>
                <li>Increase investment in youth development programs.</li>
                <li>Provide mental health resources for young people.</li>
                <li>Address the school-to-prison pipeline.</li>
                <li>Eliminate high youth unemployment.</li>
                <li>Eliminate extra-judicial killings of the youth.</li>
                <li>Promote youth-led activism and organizing</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div>
                <p className='issue-head '>5. Environmental Justice:</p>
              </div>
              <ul className='Issue-group issue-border'>
                <li>Address the impacts of climate change.</li>
                <li>Promote sustainable development policies.</li>
                <li>Reduce pollution and environmental degradation.</li>
                <li>Increase investment in renewable energy.</li>
                <li>Ensure access to clean water and air.</li>
                <li>Address environmental racism and injustice.</li>
                <li>Promote conservation and protection of natural resources.</li>
                <li>Encourage sustainable transportation options.</li>
                <li>Address the impacts of natural disasters.</li>
                <li>Promote sustainable agriculture and food systems.</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div>
                <p className='issue-head'>6. Workers' Rights:</p>
              </div>
              <ul className='Issue-group'>
                <li>Promote fair labour practices.</li>
                <li>Protecte workers from exploitation and abuse.</li>
                <li>Introduce liveable minimum wage.</li>
                <li>Strength labor laws and regulations.</li>
                <li>Ensure safe and healthy working conditions.</li>
                <li>Promote workplace democracy and worker representation.</li>
                <li>Address the gig economy and worker misclassification.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About