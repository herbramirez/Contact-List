import React, { useState } from 'react'
import ContactList from './ContactList'
import ContactRow from './ContactRow'
import App from '../App'
import { useEffect } from 'react'

export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState(null)

    console.log("SelectedContactId", selectedContactId)
     useEffect(() => {
        async function getContacts() {
            try {
            const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`)
            data = response.json()
            contact(data)
            } catch (error) {
                console.error(error)
            }
        }
        getContacts();
    }, []);
}
