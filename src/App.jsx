import { useState } from 'react'
import './App.css'
import Blog from './Components/Blog'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {

  const [bookmarks , setBookmarks] = useState([]);

  const handleAddBookMark = blog =>{
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
  }


  return (
    <>
      
      <Header></Header>
      <div className='flex max-w-3xl mx-auto'>
        <Blog handleAddBookMark={handleAddBookMark}></Blog>
        <Bookmarks bookmarks={bookmarks} ></Bookmarks>
      </div>

      
    </>
  )
}

export default App
