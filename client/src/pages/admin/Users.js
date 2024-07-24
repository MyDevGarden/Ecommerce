import React from 'react'
import Layout from '../../components/BasicLayout/Layout'
import MenuAdmin from '../../components/BasicLayout/MenuAdmin'

const Users = () => {
  return (
    <Layout title={'Dashboard-All Users'}>
        <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <MenuAdmin/>
            </div>
            <div className='col-md-9'>
                <h1>All Users</h1>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default Users