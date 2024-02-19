import React from 'react'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.avif';
import team4 from '../assets/team4.webp';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.webp'
import team7 from '../assets/team7.webp';
import team9 from '../assets/team9.avif'
import person1 from '../assets/team10.avif'
import person2 from '../assets/team11.avif'
import person4 from '../assets/team12.avif'
import person5  from '../assets/team13.avif'
import person6 from '../assets/team14.avif'
import person7 from '../assets/team15.avif'
import person8 from '../assets/team16.avif'
import person9 from '../assets/team17.avif'
import person10 from '../assets/team18.avif'
import person11 from '../assets/team19.avif'
import person12 from '../assets/team20.avif'
import group from '../assets/group.jpg'
import { FaCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";
import { TbPhotoCircle } from "react-icons/tb";
import { GrAttachment } from "react-icons/gr";
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";

const Chat = () => {
  return (
    <>
   
    <div className='flex min-w-[960px] border h-[100vh]  '>
    
        <div className=' h-[115vh]   min-w-[458px] bg-royal-bg  flex flex-col items-start   '> 
        
            <div className='flex flex-col   items-start min-w-[100px]   p-3'>{/*Profile */}
                <div className='flex flex-row items-center gap-5 '>
                    <img className='rounded-full h-[56px] w-[56px] object-cover ' src={team5} alt='logo' />
                    <div className='flex flex-col items-start'>
                        <p className='font-bold'>John Doe</p>
                        <p className='text-black text-[10px]'>My Account</p>
                    </div>
                

                </div>
            </div>
            <p className='w-[100%] h-[1px]  border mr-auto ml-auto  mt-3 '></p>
            <div className='flex flex-col  items-start   ' >
                <h1 className='font-bold w-[179px] h-[39px] '>Online Now</h1>
                {/*ONline NOw */}
                <div className='flex flex-row gap-5 items-center'>
                    <div className=''>
                        <img className='rounded-full h-[56px] w-[56px] object-cover  ' src={team1} alt='logo' />
                        <FaCircle className='text-green-500 relative bottom-4 left-9 text-sm ' />
                    </div>
                    
                    <div className=''>
                        <img className='rounded-full h-[56px] w-[56px] object-cover  ' src={team2} alt='logo' />
                        <FaCircle className='text-green-500 relative bottom-4 left-9 ' />
                    </div>
                    <div className=''>
                        <img className='rounded-full h-[56px] w-[56px] object-cover  ' src={team3} alt='logo' />
                        <FaCircle className='text-green-500 relative bottom-4 left-9 ' />
                    </div>
                    <div className=''>
                        <img className='rounded-full h-[56px] w-[56px] object-cover  ' src={team4} alt='logo' />
                        <FaCircle className='text-green-500 relative bottom-4 left-9 ' />
                    </div>
                    <div className=' rounded-full h-[56px] w-[56px] flex items-center relative  border-black border p-4 bottom-2 bg-green-200  font-semibold ' >18+</div>
                </div>

            
               {/*Messages */}
            <div className='flex flex-col p-3 gap-5'>
                
                        <div className='flex items-center gap-56  min-w-[300px]   ' >
                            <div className='font-bold w-[101px] h-[24px] '>
                                Messages
                            </div> 
                            <div className='flex gap-2 '>
                                <FaRegEdit className=' ' />
                                <CiHeart className=' ' />
                             </div> 
                    
                        </div>
                        <div className='bg-white rounded-lg  h-[28px]  sm:w-74'>
                
                            <div className='flex items-center gap-3'>
                                <CiSearch className='' />
                                <input className='rounded-lg '  type='text' placeholder='Search...' />
                            </div>
                        </div>
                        {/*Chats */}
                <div className='flex flex-col h-[100vh] gap-4'>
                    <div className='flex flex-row  items-center gap-5 '>     
                        <img className='rounded-full h-[56px] w-[56px] object-cover ' src={team4} alt='logo' />
                        <div className='flex items-center gap-[175px] font-semibold'>           
                            <div className='flex flex-col items-start '>
                                <p className='font-bold text-[16px]'>Marina Jolly</p>
                                <p className=' flex text-[10px] items-center text-slate-400 '>
                                <LuPencilLine /> Marina is typing...
                                </p>
                            </div>
                            <p className=' rounded-full h-5 w-5 flex justify-center  text-sm bg-orange-400 '>2</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <img className='rounded-full h-[56px] w-[56px] object-cover ' src={team2} alt='logo' />
                        <div className='flex flex-col items-start'>
                            <p className='font-bold'>Jackson Roy</p>
                            <p className='text-slate-400 flex items-center gap-1 text-[10px]'>
                            <TbPhotoCircle/> Sent a picture</p>
                        </div>
                

                    </div>   
                    <div className='flex flex-row items-center gap-5 '>
                        <img className='rounded-full h-[56px] w-[56px] object-cover ' src={team9} alt='logo' />
                        <div className='flex items-center gap-32'>
                            <div className='flex flex-col items-start'>
                                <p className='font-bold'>Hafsa Shaikh</p>
                                <p className='text-slate-400 text-[10px]'>Meet me before presentation.....</p>
                            </div>
                            <p className=' rounded-full h-5 w-5 justify-center bottom-2 flex   text-sm bg-orange-400 font-semibold'>3</p>
                        </div>
                

                    </div>

                    <div className='flex flex-row items-center gap-5 '>
                        <img className='rounded-full h-[56px] w-[56px] object-cover ' src={person1} alt='logo' />
                        <div className='flex flex-col items-start'>
                            <p className='font-bold'>Alix joseph</p>
                            <p className='text-slate-400 text-[10px]'>How did you prepared.....</p>
                        </div>
                

                    </div>
                    <div className='flex flex-row items-center bg-white rounded-2xl p-3 gap-5 '>
                        <img className='rounded-full h-[56px] w-[56px] object-cover ' src={group} alt='logo' />
                        <div className='flex flex-col items-start'>
                            <p className='font-bold'>College group</p>
                            <p className='text-slate-400 text-[10px]'><span className='font-semibold'>You:</span> What about wednesday....</p>
                        </div>
                

                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <img className='rounded-full h-[56px] w-[56px] object-cover ' src={person5} alt='logo' />
                        <div className='flex items-center gap-[165px]'>   
                            <div className='flex flex-col items-start'>
                                <p className='font-bold'>Rockstar Benj</p>
                                <p className='text-slate-400  flex items-center gap-1 text-[10px]'>
                            <GrAttachment /> Sent an Attachment </p>
                            </div>
                            <p className=' rounded-full h-5 w-5 flex justify-center  text-sm bg-orange-400 font-semibold'>3</p>
                        </div>                 

                    </div>
            
                    <div className='flex flex-row items-center gap-5 '>
                        <img className='rounded-full h-[56px] w-[56px] object-cover ' src={person4} alt='logo' />
                        <div className='flex flex-col items-start'>
                            <p className='font-bold'>Max Hob</p>
                            <p className='text-slate-400 text-[10px]'>Next presentation will be</p>
                        </div>
                

                    </div>
                </div>
            </div>
            </div>
        </div>
        {/*Group */}
        <div className='min-w-[502px]  bg-white'>
            <div className='flex flex-col    items-start min-w-[100px]   p-3'>{/*Profile */}
                <div className='flex  items-center gap-5 '>
                    <img className='rounded-full  border-[2.5px] p-[2px] border-green-300 h-[56px] w-[56px] object-cover ' src={group} alt='logo' />
                    <div className='flex items-center  gap-[250px]'>
                        <div className='flex flex-col items-start'>
                            <p className='font-bold'>College group</p>
                            <div className=' flex   '>
                            <img className='w-[30px] h-[30px] rounded-full r object-cover' src={person8} />
                            <img className='w-[30px] h-[30px] rounded-full -ml-3	object-cover ' src={person9} />
                            <img className='w-[30px] h-[30px] rounded-full -ml-3	object-cover ' src={person10} />

                            <p className=' flex justify-center font-semibold p-1 text-sm text-white w-[30px] h-[30px] rounded-full bg-royal-circle -ml-3'>7+</p>
                            </div>
                        </div>
                        <span className=' flex gap-2  '>
                            <CiVideoOn className='rounded-full w-[30px] h-[30px] bg-slate-300 p-1   ' />
                            <IoCallOutline className='rounded-full w-[30px] h-[30px] bg-slate-300 p-1 ' />
                        </span>
                    </div>

                    
        

                </div>
                 
                </div>
                <p className='w-[100%] h-[1px] border   mr-auto ml-auto   mt-3 '> </p>
                <div className='flex  flex-col justify-start bg-white '>
                    <p className='flex justify-center'>Yesterday</p>
                    <div className='flex gap-3 p-3'>
                        <img className='rounded-full   p-[2px] border-green-300 h-[56px] w-[56px] object-cover ' src={group} alt='logo' />
                        <div className='flex flex-col items-start gap-2'>
                            <p className='font-bold'>Mojixa Tan <span className='text-royal-bp text-[10px] '>09:03pm</span></p>
                            <p className='rounded-lg bg-royal-green p-3      font-semibold text-[10px]'>Hi, how are you all?</p>
                            <p className='rounded-lg bg-royal-green p-3 font-semibold text-[10px]'>How many of you prepared the prsentation ?</p>
                        </div>
                    </div>
                    <div className='flex gap-3 p-3'>
                        <img className='rounded-full   p-[2px] border-green-300 h-[56px] w-[56px] object-cover ' src={person5} alt='logo' />
                        <div className='flex flex-col items-start gap-2'>
                            <p className='font-bold'>Rockstar Benj <span className='text-royal-bp text-[10px] '>09:31pm</span></p>
                            <p className='rounded-lg bg-royal-green p-3 font-semibold text-[10px]'>Hello Mojixa! I am just about to start the prepration.</p>
                        </div>
                    </div>
                    <p className=' flex justify-center'>Today</p>

                    <div className='flex gap-3 p-3'>
                        <img className='rounded-full    border-green-300 h-[56px] w-[56px] object-cover ' src={person12} alt='logo' />
                        <div className='flex flex-col items-start gap-2'>
                            <p className='font-bold'>Lorel morph <span className='text-royal-bp text-[10px] '>09:20am</span></p>
                            <p className='rounded-lg flex flex-col font-semibold bg-royal-green p-3 text-[10px]'><span>Appologise guys i will not be able to contribute in </span><span>presentation as i am having fever since 2 days.</span></p>
                        </div>
                    </div>
                    <div className='flex gap-3 p-3'>
                        <img className='rounded-full   p-[2px] border-green-300 h-[56px] w-[56px] object-cover ' src={person5} alt='logo' />
                        <div className='flex flex-col items-start gap-2'>
                            <p className='font-bold'>Rockstar Benj <span className='text-royal-bp text-[10px] '>10:45am</span></p>
                            <p className='rounded-lg  bg-royal-green font-semibold p-3 text-[10px]'>No issue, take some rest.</p>
                            <p className='rounded-lg  bg-royal-green p-3 font-semibold text-[10px]'>What about others?</p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse gap-3 p-3'>
                        <img className='rounded-full  p-[2px] border-green-300 h-[56px] w-[56px] object-cover ' src={team5} alt='logo' />
                        <div className='flex flex-col items-end  gap-2'>
                            <p className='font-bold '>You <span className='text-royal-bp text-[10px] '>10:45am</span></p>
                            <p className='rounded-lg  bg-royal-orange font-semibold text-white p-3 text-[10px]'>I just completed last night.</p>
                        </div>
                    </div>
                    <div className='flex  gap-3 p-3'>
                        <img className='rounded-full  p-[2px] border-green-300 h-[56px] w-[56px] object-cover ' src={person5} alt='logo' />
                        <div className='flex flex-col  gap-2'>
                            <p className='font-bold '>Max Hob <span className='text-royal-bp text-[10px] '>is typing....</span></p>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse gap-2'>
                    <FaLocationArrow className='text-royal-orange ' />
                    <GrAttachment />
                    <TbPhotoCircle />
                    <IoMicOutline />
                    <input type='text' className='' placeholder='Your message....' />
                    <LuPencilLine /> 
                    </div>

                </div>
        
        </div>
    
        
    </div>


    
    
    
    
    </>
  )
}

export default Chat