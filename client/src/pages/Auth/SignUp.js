import React, {useState} from "react";
import Layout from "../../components/BasicLayout/Layout";

const SignUp = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[phno, setPhno] = useState("");
    const[addr, setAddr] = useState("");

  return (
    <Layout title={"Registration"}>
      <div className="register">
        <h1>Register Page</h1>
        <form>
          <div className="mb-3">
            
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-3">
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="mb-3">
            
            <input
              type="text"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
              className="form-control"
              id="exampleInputphone"
              placeholder="Enter phone no"
              required
            />
          </div>
          <div className="mb-3">
            
            <input
              type="text"
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
              className="form-control"
              id="exampleInputaddr"
              placeholder="Enter address"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
