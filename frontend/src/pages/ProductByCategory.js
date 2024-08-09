import React, { useState, useEffect } from 'react'
import Layout from '../components/BasicLayout/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from "../context/cartContext";
import toast from "react-hot-toast";

import axios from 'axios'

const ProductByCategory = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [cart, setCart] = useCart();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);

  const getProductByCat = async () => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`);
      setProducts(data?.products)
      setCategory(data?.category)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout title='Products By Category'>
      <div className='container mt-3'>
      <h3 className='text-center'>Category- {category?.name}</h3>
      <h5 className='text-center'>{products?.length} result found</h5>
      <div className='row'>
      <div className="d-flex flex-wrap">
          {products?.map((p) => (
              
              
                <div className="card m-2" style={{ width: "18rem"}} key={p._id}>
                  <img src={`${process.env.REACT_APP_API}/api/v1/product/photo-product/${p._id}`} className="card-img-top" style={{ width: "18rem", height: "20rem"}} alt={p.name} />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.desc.substring(0,30)}</p>
                    <p className="card-text">Rs. {p.price}</p>
                    <button className="btn btn-primary ms-1" onClick={()=> navigate(`/product/${p.slug}`)}>More Details</button>
                    <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("item added to cart");
                    }}
                  >
                    Add to Cart
                  </button>
                  </div>
                </div>
             
            ))}

          </div>
          {/*<div className="m-2 p-3">
            {products && products.length< count && (
              <button className="btn btn-warning" onClick={(e) =>{
                e.preventDefault();
                setPage(page+1);
              }}>
                {loading ? 'Loading...' : 'Load More'}
              </button>
            )}
          </div>*/}
      </div>
      </div>
      
    </Layout>
  )
}

export default ProductByCategory