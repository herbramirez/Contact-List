import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactList from './components/ContactList.jsx'
import './App.css'

function App() {
  
  const [selectedCotactId, setSelectedContactId] = setSelectedContactId(null)
  return (
    <>
    <ContactList />
    </>
  );

}

export default App
