import React from "react";
import Layout from "../components/BasicLayout/Layout";
import { useCart } from "../context/cartContext";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  //total price calculations
  const totalPrice = () =>{
    try {
      let total = 0;
      cart?.map(item => {total =total + item.price});
      return total.toLocaleString("en-IN", {
        style : 'currency',
        currency : "INR"
      });
    } catch (error) {
      console.log(error)
    }
  }
  

  //delete item from cart
  const removeCartItem = (pid) =>{
    try {
      let cartItems = [...cart]
      let i= cartItems.findIndex((item) => item._id ===pid);
      cartItems.splice(i, 1);
      setCart(cartItems);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length
                ? `You Have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : " Your Cart Is Empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {cart?.map((p) => (
              <div className="row mb-2 card flex-row">
                <div className="col-md-4">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/photo-product/${p._id}`}
                    className="card-img-top"
                    style={{ width: "10rem", height: "10rem" }}
                    alt={p.name}
                  />
                </div>
                <div className="col-md-8">
                  <p>{p.name}</p>
                  <p>{p.desc.substring(0, 30)}</p>
                  <p>Price : {p.price}</p>
                  <button className="btn btn-danger" onClick={() => removeCartItem(p._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total : {totalPrice()} </h4>
            {auth?.user?.addr ? (
              <>
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth?.user?.addr}</h5>
                  <button className="btn btn-outline-warning" onClick={() => navigate("/dashboard/user/profile")}>
                    Update Address
                    </button>
                    </div>
                    </>
                ) : (
                  <div className="mb-3">
                    {
                      auth?.token ? (
                        <button className="btn btn-outline-warning" onClick={() => navigate("/dashboard/user/profile")}>
                    Update Address
                    </button>
                   
                      ) : (
                        <button className="btn btn-outline-warning" onClick={() => navigate("/login", {state: "/cart",})}>
                    please LogIn To Checkout
                    </button>
                      )
                    }
                  </div>
          
              
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
