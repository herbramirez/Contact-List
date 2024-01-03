import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactList from './components/ContactList.jsx'
import SelectedContact from "./components/SelectedContact.jsx"
import './App.css'

function App() {

  // Select a contact
  // Navigate to a new view
  // Show the selected contact and its details
  
  const [selectedContactId, setSelectedContactId] = useState(null)
  
  console.log("USE STATE CONTACTS:", selectedContactId)



  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );

}

export default App
