import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import logoIcon from '../assets/logo-icon.png';

export const ChatBox = () => {
  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(false)
  const { selectedChat } = useAppContext()

  useEffect(() => {
    if (selectedChat) {
      setMessage(selectedChat.message || [])
    }
  }, [selectedChat])

  return (
    <div className="flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40">

      <div className='flex-1 mb-5 overflow-y-scroll'>
        {message.length === 0 && (
          <div className='h-full flex flex-col items-center justify-center gap-2 text-primary'>
            <img src={logoIcon} alt="" className='w-full max-w-56 sm:max-w-68' />
            <p className='mt-5 text-4xl sm:text-6xl text-center text-gray-400 dark:text-white'>
              Ask me anything.
            </p>
          </div>
        )}
        {message.map((messages,index) => {})}
      </div>

      <form>
      </form>
    </div>
  )
}