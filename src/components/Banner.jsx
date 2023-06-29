import React from 'react'

function Banner() {
  return (
    <>
      <div id="bannerContainer" className='flex items-center text-center justify-center bg-purple py-[18px] px-[67px] rounded-[10px] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]'>
        <div id="banner" className='w-[194px] text-center text-[15px] leading-[26px] font-["Poppins"] font-medium text-white tracking-[0.268px] xl:w-full'>
          <p><span className='font-bold'>Try it free 7</span> days then $20/mo. thereafter</p>
        </div>
      </div>
    </>
  )
}

export default Banner