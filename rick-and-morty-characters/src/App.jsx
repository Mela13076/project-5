import './App.css'
import Logo from "./assets/Logo.png"
import Content from './componets/content'


function App() {

  return (
    <div className='App'>
      <div className='Header'>
        <img src= {Logo} alt="Rick and Morty Logo" height="150px" width= "auto"/>
      </div>
      <div className="content-sec">
        <Content />
      </div>
      
    </div>
  )
}

export default App
