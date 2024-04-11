import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const Home = () => {
  return (
    <>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
    </div>
    </div>
    </>
  )
}

export default Home