import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import { useState } from 'react'


function App() {
  const [selectedTab,setSelectedTab]=useState('Home');

  return (
    <>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">
      <Header/>
      {selectedTab==="Home"?<PostList/>:<CreatePost/>}
      
      
      </div>
    </div>
      <Footer/></>
  )
}

export default App
