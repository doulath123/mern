import React from 'react'

function About() {
  return (
   <>
   <div className='container emp-profile'>
    <form method=''>
        <div className='row'>
            <div className='col-md-4'>
                <div className='profile-img'>
                <img src="" alt='doulath'/>
                </div>
               
            </div>

            <div className='col-md-6'>
                <div className='profil-head'>
                    <h5>Doulath Basha</h5>
                    <h6>Web Developer</h6>
                    <p className='profil-rating mt-3 mb-5'>RANKINGS: <span>1/10</span></p>

                    <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
    <a className="nav-link active" id='home-tab' data-toggle="tab"  href="#home" role="tab">About</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" id='profile-tab' data-toggle="tab"  href="#profile" role="tab">Timeline</a>
  </li>
                    </ul>
                </div>
            </div>

            <div className='col-md-2'>
                <input type="submit" className="profile-edit-btn" name='btnAddMore' value="Edit Profile" />
            </div>
        </div>

        <div className='row'>
            <div className='col-md-4'>
                <div className='profile-work'>
                    <p>Work Link</p>
                    <a href='' target='_doulath'>Youtube</a>
                </div>
            </div>
            <div className='col-md-8 pl-5 about-info'>
                <div className='tab-content profile-tab' id='myTabContent'>
                    <div className='tab-pane fade show active' id='home' role="tabpanel" aria-labelledby="home-tab">
                        <div className='row mt-3'>
                            <div className='col-md-6'>
                                <label >User ID</label>
                            </div>
                            <div className='col-md-6'>
                                <p>12746831274683</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-6'>
                                <label >Name</label>
                            </div>
                            <div className='col-md-6'>
                                <p>Doulath Basha</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>

   </div>
   </>
  )
}

export default About