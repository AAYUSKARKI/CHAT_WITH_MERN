import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {
  const [User, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    gender: ''
  });
  

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('Form submitted!',User);
    try {
      const response = await axios.post("http://localhost:7000/api/v1/users/register",User)
      console.log(response)
      setUser({
        fullname: '',
        username: '',
        email: '',
        password: '',
        gender: ''
      });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error)
      toast.error('Signup failed. Please try again.');
    }
  };


  return (
    <div className="min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
        <h1 className="text-3xl font-bold text-center text-gray-300">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
            value={User.fullname}
            onChange={(e)=>{setUser({...User,fullname:e.target.value})}}
              type="text"
              id="fullName"
              className="w-full input input-bordered h-10"
              placeholder="Enter your fullname"
            />
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
          <div className="form-control flex items-center">
  <label htmlFor="male" className="cursor-pointer label">
    <span className="label-text">Male</span>
    <input
      onChange={(e) => { setUser({ ...User, gender: 'male' }) }}
      checked={User.gender === 'male'}
      type="radio"
      id="male"
      name="gender"
      className="radio radio-primary mx-2"
    />
  </label>
  <label htmlFor="female" className="cursor-pointer label">
    <span className="label-text">Female</span>
    <input
      onChange={(e) => { setUser({ ...User, gender: 'female' }) }}
      checked={User.gender === 'female'}
      type="radio"
      id="female"
      name="gender"
      className="radio radio-primary mx-2"
    />
  </label>
</div>
          <button type="submit" className="btn btn-primary mt-4">Signup</button>

        
        </form>
        <Link to='/login'>Already Have An Account?</Link>
      </div>
      
    </div>
  );
};

export default Signup;
