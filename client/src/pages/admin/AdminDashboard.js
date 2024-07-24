import React from 'react'
import Layout from '../../components/BasicLayout/Layout'
import { useAuth } from '../../context/authContext'
import MenuAdmin from '../../components/BasicLayout/MenuAdmin'

const AdminDashboard = () => {
  const [auth] =useAuth();
  return (
    <Layout>
        <div className='container-fluid m-3 p-3'>
          <div className='row'>
            <div className='col-md-3'>
              <MenuAdmin/>
            </div>
            <div className='col-md-9'>
              <div className='card w-75 p-3'>
                
              <h3>Name : {auth?.user?.name}</h3>
              <h3>email : {auth?.user?.email}</h3>
              <h3>Contact : {auth?.user?.phno}</h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard