import React, { useState } from 'react';
import Warning from '../images/icon-error.svg'
import { useForm } from 'react-hook-form';

// update to trigger a github page re-deploy

function Form() {
  const [emailColor, setEmailColor] = useState('#3D3B48')

  const { register, resetField, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  })

  function onSubmit(data) {
    let warningDiv = document.querySelectorAll('.warningContainer')
    warningDiv = Array.from(warningDiv)
    warningDiv.forEach((display) => {
      // check if warning message is there and hide it if it is
        const style = window.getComputedStyle(display)
        const displayValue = style.getPropertyValue('display')

        if (displayValue === 'block') {
          display.style.display = 'none'
        }   
    })

    // log the values
    console.log(data)

    // reset all fields to the default values
    resetField('firstName')
    resetField('lastName')
    resetField('email')
    resetField('password')
  }

  function onError(e) {  
    // When an error occurs then for each error find the warning div for that field and display it
    for (const error in e) {
      let errorText = document.getElementById(error);
      console.log(errorText.value)
      errorText.style.color = '#FF7979'
      let errorElement = document.getElementById(error).parentElement.nextSibling
      errorElement.style.display = 'block'
      // Listen for when the user begins to fix the input and change the color of the text back to black
      errorText.addEventListener('input', function(){
        console.log('change')
        errorText.style.color ='#3D3B48'
      })
    }
  }
  
  return (
    <>
    <div id="formContainer">
      <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <div id='firstContainer' className='mb-4'>
          <div id='firstNameContainer' className='pb-4 rounded-[5px] bg-white border border-solid border-offWhite flex justify-between pr-[27px] pl-[20px] py-[15px]'>
            <div id="firstname">
              <input type="text" id='firstName' name='firstName' placeholder='First Name' className='placeholder:text-black placeholder:tracking-[0.25px] placeholder:font-["Poppins"] placeholder:text-base placeholder:leading-[26px] placeholder:font-semibold placeholder:opacity-[0.75]'
                {...register('firstName', {
                  required: 'First Name cannot be empty',
                })}
              />
            </div>
            <div className="warningContainer hidden">
              <img src={Warning} alt="Warning" />
            </div>
          </div>
            <div className="errorDiv text-orange font-['Poppins'] text-[11px] italic font-medium text-right h-[10px] mt-[6px]">
              <p>{errors.firstName?.message}</p>
            </div>
        </div>
        <div id="secondContainer" className='mb-4'>
          <div id='lastNameContainer' className='pb-4 rounded-[5px] bg-white border border-solid border-offWhite flex justify-between pr-[27px] pl-[20px] py-[15px]'>
            <div id="lastname">
              <input type="text" id='lastName' name='lastName' placeholder='Last Name' className='placeholder:text-black placeholder:tracking-[0.25px] placeholder:font-["Poppins"] placeholder:text-base placeholder:leading-[26px] placeholder:font-semibold placeholder:opacity-[0.75]' 
                {...register('lastName', {
                  required: 'Last Name cannot be empty'
                })}
              />
            </div>
            <div className="warningContainer hidden">
              <img src={Warning} alt="Warning" />
            </div>
          </div>
            <div className="errorDiv text-orange font-['Poppins'] text-[11px] italic font-medium text-right h-[10px] mt-[6px]">
                <p>{errors.lastName?.message}</p>
            </div>
        </div>
        <div id="thirdContainer" className='mb-4'>
          <div id='emailContainer' className='pb-4 rounded-[5px] bg-white border border-solid border-offWhite flex justify-between pr-[27px] pl-[20px] py-[15px]'>
            <div id="emailDiv">
              <input type="email" id='email' name='email' placeholder='Email Address' className='placeholder:text-black placeholder:tracking-[0.25px] placeholder:font-["Poppins"] placeholder:text-base placeholder:leading-[26px] placeholder:font-semibold placeholder:opacity-[0.75]'
                {...register('email', {
                  required: 'Email cannot be empty',
                  pattern: {
                    value: /\w+@\w+\.\w{2,3}/,
                    message: 'Looks like this is not an email'
                  }
                })}
              />
            </div>
            <div className="warningContainer hidden">
              <img src={Warning} alt="Warning" />
            </div>
          </div>
            <div className="errorDiv text-orange font-['Poppins'] text-[11px] italic font-medium text-right h-[10px] mt-[6px]">
                  <p>{errors.email?.message}</p>
            </div>
        </div>
        <div id='fourthContaier' className='mb-4'>
        <div id='passwordContainer' className='pb-4 rounded-[5px] bg-white border border-solid border-offWhite flex justify-between pr-[27px] pl-[20px] py-[15px]'>
          <div id="passwordDiv">
            <input type="password" id='password' name='password' placeholder='Password' className='placeholder:text-black placeholder:tracking-[0.25px] placeholder:font-["Poppins"] placeholder:text-base placeholder:leading-[26px] placeholder:font-semibold placeholder:opacity-[0.75]'
              {...register('password', {
                required: 'Password cannot be empty'
              })}
            />
          </div>
          <div className="warningContainer hidden">
            <img src={Warning} alt="Warning" />
          </div>
        </div>
          <div className="errorDiv text-orange font-['Poppins'] text-[11px] italic font-medium text-right h-[10px] mt-[6px]">
                    <p>{errors.password?.message}</p>
          </div>
        </div>
        <div id='submitContainer' className='mb-2 bg-green flex justify-center items-center py-[15px] px-[45px] shadow-[0px_-4px_0px_0px_rgba(0,0,0,0.09)_inset] rounded-[5px] text-white text-[15px] leading-[26px] tracking-[1px] font-semibold font-["Poppins"] text-center hover:bg-lightGreen hover:cursor-pointer'>
          <input type="submit" id='submit' value='CLAIM YOUR FREE TRIAL' />
        </div>
      </form>
      <div id="termsContainer" className='px-[15px] text-lightPurple text-center text-[11px] leading-[21px] font-medium font-["Poppins"]'>
        <p>By clicking the button, you are agreeing to our <span className='text-orange font-bold'>Terms and Services</span></p>
      </div>
    </div>
    </>
  )
}

export default Form