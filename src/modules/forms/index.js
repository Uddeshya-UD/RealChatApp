import React, { useState } from 'react'
import Input from '../../components/Input/index';
import Button from '../../components/Button';
const Form = ({
  isSignInPage = true,
}) => {

 const [data, setdata] = useState({
  ...(isSignInPage && {
    fullName: ''
  }),
  email: '',
  password: ''
 })

 console.log("data >> " ,data);
 
  return (
    <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
       <div className='text-4xl font-bold'>Welcome {isSignInPage && 'Back'}</div>   
       <div className='text-xl font-light mb-14'>{isSignInPage ? 'Sign in to explore' : 'Sign up now to get started'}</div>  
       <form className="flex flex-col items-center w-full" onSubmit={(e) => console.log("Submitted")}>
        {!isSignInPage &&  <Input label='Full Name' name="name" placeholder='Enter your fullname' className='mb-6' value={data.fullName} onChange={(e)=> setdata( { ...data, fullName: e.target.value})}/>}
       <Input label='Email Address' type='email' name="name" placeholder='Enter your email' className='mb-6' value={data.email} onChange={(e) => setdata({...data,email: e.target.value})}/>
       <Input label='Password' name="name" placeholder='Enter your Password' className='mb-14' value={data.password} onChange={(e) => setdata({...data,password: e.target.value})}/>
       <Button label={isSignInPage ? "Sign in" : "Sign up"} className='w-1/2 mb-4' type='submit'/>
       </form>

       <div>{isSignInPage ? "Didn't have an account" : "Already have an account" } <span className='text-primary custor-pointer underline'>{isSignInPage ? "Sign up" : "Sign in"}</span></div>
    </div>
  )
}

export default Form;