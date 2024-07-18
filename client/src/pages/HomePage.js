import React from "react";
import Layout from "../components/BasicLayout/Layout";
import { useAuth } from "../context/authContext";

const HomePage = () => {
  const[auth, setAuth] = useAuth();
  return (
    <Layout title={'Best Offers-shop now'}>
      <h1>HomePage</h1>
      <pre>
        {JSON.stringify(auth, null, 4)}
      </pre>
    </Layout>
  );
};

export default HomePage;
