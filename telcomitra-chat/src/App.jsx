import React, { use } from 'react'
import { useState } from 'react'
import ChatButton from './components/ChatButton'
import ChatWindow from './components/ChatWindow'
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle= ()=>{
    setIsOpen((prev)=>!prev)
  }
  return (
    <>
    <ChatWindow isOpen={isOpen} />
      <ChatButton isOpen={isOpen} onToggle={handleToggle}/>
    </>
  )
}

export default App