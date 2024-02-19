import { useState } from 'react'


import Icons from './pages/Icons'
import Chat from './pages/Chat'
import Sharedfiles from './pages/Sharedfiles'

function App() {
  return(
    <>
    <div className='flex flex-row border'>
    <Icons />
    
    <Chat  />
    
    <Sharedfiles />
    </div>
    </>
  )
}

export default App
