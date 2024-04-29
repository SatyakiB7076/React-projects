import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'
import Post from './Components/Post'

function App() {
  

  return (
    <>
    <div className='app-container'>
      <Sidebar/>
      <div className="content">
      <Header/>
      <CreatePost/>
      <Post/>
      <Post/>
      <Post/>
      </div>
    </div>
      <Footer/></>
  )
}

export default App
