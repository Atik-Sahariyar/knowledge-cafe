import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {

  const [bookmarks, setBookmarks] = useState([]);
  
  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog ]
    setBookmarks(newBookmarks)
  }
  
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = time =>{
   const  newReadingTime = readingTime +time;
    setReadingTime(newReadingTime);
  }
  return (
    <div className='mx-4'>
    <Header></Header>
    <main className='md:flex  max-w-4xl '>
    <Blogs handleAddToBookmark ={handleAddToBookmark}
    handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks 
     bookmarks={bookmarks}
     readingTime={readingTime}>
     </Bookmarks>
    </main>
    </div>
  )
}

export default App
