// import './App.css'
// import Logo from "./assets/Logo.png"
// import Content from './componets/content'

//import { Routes } from "react-router-dom";


// function App() {

//   return (
//     <div className='App'>
      // <div className='Header'>
      //   <img src= {Logo} alt="Rick and Morty Logo" height="150px" width= "auto"/>
      //   <h2>Search through most characters found in Rick and Morty!</h2>
      // </div>
      // <div className="content-sec">
      //   <Content />
      // </div>
      
//     </div>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";
import Main from "./pages/mainPage";
import Descriptive from "./pages/descriptivePage";

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/description/:id" element={<Descriptive />} /> */}
        <Route 
          path="/description" 
          element={<Descriptive />} 

        />
      </Routes>
    </div>
  )
}

export default App
