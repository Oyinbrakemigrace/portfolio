import React from 'react'
import { MdSentimentVeryDissatisfied } from 'react-icons/md'

function EmailNotSubmitted() {
  return (
      <div className='lg:w-1/4 w-full flex justify-center items-center gap-2 bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA] text-center text-[#301c30] font-bold py-8 rounded-3xl'>
          <span> Message failed to send!</span> <MdSentimentVeryDissatisfied size={25} className='text-[#301c30]' />
      </div>
  )
}

export default EmailNotSubmitted