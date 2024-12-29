"use client"

import { useEffect, useState } from "react"
import db from "../utils/firestore"
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

import DeleteItem from "./DeleteItem"

import { PostCard } from '@/components/PostCard'

// // Sample data for posts
// const posts = [
//   {
//     id: 1,
//     author: "John Doe",
//     avatarUrl: "https://github.com/shadcn.png",
//     timestamp: "2h ago",
//     content: "Just finished a great coding session! #webdev #javascript"
//   },
//   {
//     id: 2,
//     author: "Jane Smith",
//     avatarUrl: "https://github.com/shadcn.png",
//     timestamp: "4h ago",
//     content: "Excited to start my new project using Next.js and Tailwind CSS!"
//   },
//   {
//     id: 3,
//     author: "Bob Johnson",
//     avatarUrl: "https://github.com/shadcn.png",
//     timestamp: "6h ago",
//     content: "Does anyone have experience with GraphQL? Looking for some tips!"
//   }
// ]

const Posts = () => {
  const [items, setItems] = useState([])

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const querySnapshot = await getDocs(collection(db, "items"))
  //     setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   }

  //   fetchItems()
  // }, [])


useEffect(() => {
  const itemsQuery = query(collection(db, "items"), orderBy("timestamp", "desc"));

  const unsubscribe = onSnapshot(itemsQuery, (querySnapshot) => {
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  return () => unsubscribe();
}, []);



  console.log('dkowkdwd', items)

  return (
      <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      {items.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          avatarUrl={post.avatarUrl}
          timestamp={post.timestamp}
          content={post.content}
        />
      ))}
      </div>
  )
}

export default Posts
