"use client"

import db from '../utils/firestore';
import { useAuth } from "../../AuthContext"

import { collection, addDoc, onSnapshot, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


const CreatePost = () => {
    const [value, setValue] = useState('');
    const { userData } = useAuth()

    const handleSubmit = async (event) => {
        setValue(''); // Clear the form
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "items"), {
                author: userData?.displayName,
                timestamp: serverTimestamp(), // Automatically uses the server timestamp
                content: value,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    console.log('userData', userData)

    return (

      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Textarea
          placeholder="What's happening?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-grow"
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={value.trim().length === 0}>
          Tweet
        </Button>
      </div>
    </form>
    );
};

export default CreatePost;
