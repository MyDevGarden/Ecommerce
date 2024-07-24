import React from 'react'
import Layout from '../../components/BasicLayout/Layout'
import MenuUser from '../../components/BasicLayout/MenuUser'

const Orders = () => {
  return (
    <Layout title='Your Orders'>
             <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <MenuUser/>
            </div>
            <div className='col-md-9'>
                <h1>All Orders</h1>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default Orders