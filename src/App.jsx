import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactList from './components/ContactList.jsx'
import './App.css'

function App() {

  // Select a contact
  // Navigate to a new view
  // Show the selected contact and its details
  
  const [selectedCotactId, setSelectedContactId] = setSelectedContactId(null)


  return (
    <>
     <ContactList />
    </>
  );

}

export default App
