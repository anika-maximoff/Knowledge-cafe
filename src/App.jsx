import './App.css'
import Blog from './Components/Blog'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {


  return (
    <>
      
      <Header></Header>
      <div className='flex'>
        <Blog></Blog>
        <Bookmarks></Bookmarks>
      </div>

      
    </>
  )
}

export default App
