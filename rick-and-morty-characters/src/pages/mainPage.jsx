import Logo from "../assets/Logo.png"
import Content from "../componets/content"
import './mainPage.css'

function Main(){
    return (
        <div className="mainPage">
             <div className='Header'>
                <img className="mainHeader" src= {Logo} alt="Rick and Morty Logo" height="150px" width= "auto"/>
                <h2>Search through most characters found in Rick and Morty!</h2>
            </div>
            <div className="content-sec">
                <Content />
            </div>
        </div>
    )
}

export default Main