import React from 'react'

function Copy() {
  return (
    <>
      <div id="copyContainer" className='flex flex-col items-center text-center xl:text-left xl:items-start'>
        <div id="heading" className='pb-4 text-white font-["Poppins"] text-[28px] leading-[36px] tracking-[-0.292px] font-bold xl:text-[50px] xl:leading-[55px] xl:tracking-[-0.521px] xl:pb-[11px]'>
          <h1>Learn to code by watching others</h1>
        </div>
        <div id="subheading" className='text-white font-["Poppins"] text-base leading-[26px] font-medium'>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
      </div>
    </>
  )
}

export default Copy