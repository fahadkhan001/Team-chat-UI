import React from 'react'
import group from '../assets/group.jpg'
import { TbPhotoSquareRounded } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import build1 from '../assets/build1.jpg'
import build2 from '../assets/build2.webp'
import build3 from '../assets/build3.jpg'
import build4 from '../assets/build4.jpeg'
import { HiOutlineClipboardList } from "react-icons/hi";
import { CgClipboard } from "react-icons/cg";
import { TbClipboardText } from "react-icons/tb";
import { IoMdLink } from "react-icons/io";


const Sharedfiles = () => {
  return (
    <>
      <div className='flex  flex-col border  min-w-[379px] h-[100vh] mt-[31px]'>
        <div className='flex flex-col items-center'>
        
          <div className='flex flex-col items-center '>
            <img className='rounded-full w-[74px] h-[74px] object-cover ' src={group} alt='profile' />
            <p>College group</p>
            <p>@collegefriends</p>
          
          </div>
          
          
          </div>
          <p className='w-[100%] h-[1px] bg-white border mr-auto ml-auto   mt-3 '> </p>
          <div className='flex justify-between p-2'>
          <p className='font-semibold'>Participants</p>
          <p className='font-semibold'>Shared files</p>
          </div>
          <div>
          <p className='w-[100%] h-[1px] bg-white border mr-auto ml-auto   shadow-lg shadow-royal-orange    mt-3 '> </p>
          </div>

          <div className='flex items-center justify-between p-3'>
            <p className='font-bold flex items-center gap-2'>
            <TbPhotoSquareRounded className='w-[18px] h-[18px] ' />
              Shared Media</p>
              <HiDotsVertical className='' />
          </div>
          <div className='ml-[70px]  mt-[10px]'>
          <div className='flex gap-4'>
              <img className='w-[100px] rounded-2xl h-[100px] ' src={build1} alt='build1' />
              <img  className='w-[100px] rounded-2xl h-[100px] ' src={build2} alt='build2' />
          </div>
          <div className='flex gap-4 mt-4 '>
              <img className='w-[100px] rounded-2xl h-[100px] ' src={build3} alt='build3' />
              <img className='w-[100px] rounded-2xl h-[100px] ' src={build4} alt='build4' />
          </div>
          </div>
          <div className=' flex flex-col mt-6'>
            <p className='font-bold flex items-center gap-3'> <TbClipboardText/> Shared Files
            </p>

            <div className='flex flex-col p-3'>

              <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3 justify-between'>
              <TbClipboardText/>
              <p className='font-medium flex flex-col  items-center '> Architecture21.doc
              <span className=' font-light text-sm text-royal-bp '>04/09/2023 at 09:34am</span>
              </p>
              </div>
              <HiDotsVertical />
              </div>

              <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3 justify-between '>
              <TbClipboardText/>
              <p className='font-medium flex flex-col items-center '>  Architecture28.doc
              <span className=' font-light text-sm text-royal-bp ' >02/09/2023 at 10:43am</span>
           
              </p>
              </div>
              <HiDotsVertical />
              </div>
              <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3 justify-between'>
              <TbClipboardText/> 
              <p className=' font-medium flex flex-col items-center'> Architecture16.doc
              <span className=' font-light text-sm text-royal-bp '>01/09/2023 at 08:21am</span>
              </p>
              </div>
              <HiDotsVertical />
              </div>
            </div>
            <div>
              <p className='flex items-center gap-3 font-bold'><IoMdLink className='text-xl'/>Shared Links</p>

              <p className='flex items-center gap-3 p-2 '><IoMdLink className='rounded-full bg-royal-green p-1 w-[25px] h-[25px]'/>https://dribble/hafsadeartisto.......</p>
            </div>

          </div>
              
      </div>
    
    </>
  )
}

export default Sharedfiles