import React from 'react';
import { useState } from 'react';
import axios from 'axios'



const Login = () => {

const [User, setUser] = useState({
  username:'',
  email:'',
  password:''
})

const handleSubmit = async(event) => {
  event.preventDefault();
  console.log('Form submitted!',User);
  try {
    const response = await axios.post("http://localhost:7000/api/v1/users/login",User)
    console.log(response.data.message)
    setUser({
      username: '',
      email: '',
      password: '',
    });
    toast.success(response.data.message);
  } catch (error) {
    console.log(error)
    toast.error('Login failed. Please try again.');
  }
};

  return (
    <div className="min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
        <h1 className="text-3xl font-bold text-center text-gray-300">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="userName" className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
                     value={User.username}
                     onChange={(e)=>{setUser({...User,username:e.target.value})}}
              type="text"
              id="userName"
              className="w-full input input-bordered h-10"
              placeholder="Enter your username"
            />
            <label htmlFor="email" className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
             onChange={(e)=>{setUser({...User,email:e.target.value})}}
                     value={User.email}
              type="email"
              id="email"
              className="w-full input input-bordered h-10"
              placeholder="Enter your email"
            />
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
             onChange={(e)=>{setUser({...User,password:e.target.value})}}
                     value={User.password}
              type="password"
              id="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">Login</button>

        
        </form>
      </div>
      
    </div>
  );
};

export default Login;
