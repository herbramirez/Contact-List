import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactList from './components/ContactList.jsx'
import SelectedContact from "./components/SelectedContact.jsx"


function App() {  
  const [selectedContactId, setSelectedContactId] = useState(null)
  
  console.log("USE STATE CONTACTS:", selectedContactId)



  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      
      )}
    </>
  );

}

export default App
