import React from 'react'
import { IconContext } from 'react-icons';
import { BsFire } from "react-icons/bs";
import { RiApps2Line } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";

import { RiShutDownLine } from "react-icons/ri";


const Icons = () => {
  return (
    <>
    <div className='flex flex-col justify-between   min-w-[20vh] h-[115vh]'>
    
           <div className='flex flex-col justify-between gap-24'>
            <BsFire className=' text-orange-500 s w-[34.36px] h-[34.36px] mt-[40px] ml-[32px] ' />
            </div>
        
                <div className='flex flex-col  gap-8'>            
                  <RiApps2Line className='text-xl w-[25px] h-[25px] ml-[35px] mt-[30px] ' />
                  <FaRegCommentDots className='bg-orange-500 gap-10 text-white text-xl p-1 w-[25px] h-[25px] ml-[38px] ' />
                  <IoMdContacts className='text-xl w-[25px] h-[25px]  ml-[38px]  ' />
                  <IoCallOutline className='text-xl w-[25px] h-[25px] ml-[38px] ' />
                  <CiBookmark className='text-xl w-[25px] h-[25px] ml-[38px]' />
                  <MdErrorOutline className='text-xl w-[25px] h-[25px] ml-[38px]' />
                </div>
                <RiShutDownLine className='text-xl w-[25px] h-[25px] ml-[38px] mt-[270px]' />
      </div>
              
              

     
    
   </>
  )
}

export default Icons