import Layout from '../components/BasicLayout/Layout'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [similarproducts, setSimilarProducts] = useState([])

    //initial state details
    useEffect(()=>{
        if(params?.slug) getProduct()
    }, [params?.slug])

    //get Product details
    const getProduct = async () =>{
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.product);
            getSimilarProducts(data?.product._id, data?.product?.category._id)
        } catch (error) {
            console.log(error);
        }
    }

    //get similar products
    const getSimilarProducts = async (pid, cid) =>{
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/similar-products/${pid}/${cid}`);
            setSimilarProducts(data?.products)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Layout>
       <div className='row container mt-2'>
        <div className='col-md-6'>
            <img src={`${process.env.REACT_APP_API}/api/v1/product/photo-product/${product._id}`} className='card-img-top' alt={product.name} height={'400'} width={'400'}/>
        </div>
        <div className='col-md-6 text-center'>
            <h4>Product Details</h4>
            <h5>Name : {product.name}</h5>
            <h5>Decription : {product.desc}</h5>
            <h5>Price : {product.price}</h5>
          
           <h5>Category : {product?.category?.name}</h5>
           <button className="btn btn-secondary ms-1">Add to Cart</button>

        </div>
       </div>
       <div className='row container text-center'>
        <h1>Similar Products</h1>
        {similarproducts.length < 1 && (<p>No similar Products Found</p>)}
        <div className="d-flex flex-wrap">
          {similarproducts?.map((p) => (
              
              
            
                <div className="card m-2" style={{ width: "18rem"}}>
                  <img src={`${process.env.REACT_APP_API}/api/v1/product/photo-product/${p._id}`} className="card-img-top" style={{ width: "18rem", height: "20rem"}} alt={p.name} />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.desc.substring(0,30)}</p>
                    <p className="card-text">Rs. {p.price}</p>
                    
                    <button className="btn btn-secondary ms-1">Add to Cart</button>
                  </div>
                </div>
             
            ))}

          </div>
       </div>
    </Layout>
  )
}

export default ProductDetails