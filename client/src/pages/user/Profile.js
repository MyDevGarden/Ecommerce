import React from 'react'
import Layout from '../../components/BasicLayout/Layout'
import MenuUser from '../../components/BasicLayout/MenuUser'

const Profile = () => {
  return (
    <Layout title='Your Profile'>
        <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <MenuUser/>
            </div>
            <div className='col-md-9'>
                <h1>Your Profile</h1>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default Profile