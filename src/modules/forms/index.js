import React from 'react'
import Input from '../../components/Input/index';
import Button from '../../components/Button';
const Form = ({
  isSignInPage = false
}) => {
  return (
    <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
       <div className='text-4xl font-bold'>Welcome {isSignInPage && 'Back'}</div>   
       <div className='text-xl font-light mb-14'>{isSignInPage ? 'Sign in to explore' : 'Sign up now to get started'}</div>  
       {!isSignInPage &&  <Input label='Full Name' name="name" placeholder='Enter your fullname' className='mb-6'/>}
       <Input label='Email Address' name="name" placeholder='Enter your email' className='mb-6'/>
       <Input label='Password' name="name" placeholder='Enter your Password' className='mb-14'/>
       <Button label={isSignInPage ? "Sign in" : "Sign up"} className='w-1/2 mb-4'/>
       <div>{isSignInPage ? "Didn't have an account" : "Already have an account" } <span className='text-primary custor-pointer underline'>{isSignInPage ? "Sign up" : "Sign in"}</span></div>
    </div>
  )
}

export default Form;