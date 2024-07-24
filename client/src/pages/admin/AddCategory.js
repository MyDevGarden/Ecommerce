import React from 'react'
import Layout from '../../components/BasicLayout/Layout'
import MenuAdmin from '../../components/BasicLayout/MenuAdmin'

const AddCategory = () => {
  return (
    <Layout title={'Dashboard-Add Category'}>
        <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <MenuAdmin/>
            </div>
            <div className='col-md-9'>
                <h1>Create Category</h1>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default AddCategory