import './App.css';
import ConstructionIcon from '@mui/icons-material/Construction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function App() {
  const mouseEnterHandler = (e, factor)=>{
    if(!e.target.querySelector("a")) return
    document.documentElement.style.setProperty("--multiplier", factor)
    console.log(e.target)
    e.target.classList.add("active")
    document.getElementById("Project-selector").classList.add("active")
  }

  const mouseLeaveHandler = ()=>{
    document.querySelectorAll(".active").forEach((elem)=>{
      elem.classList.remove("active")
    })
  }

  return (
    <div className="App">
      <div className="Profile">
      <ConstructionIcon className='Profile-icon' />
        <p>
          Under Construction...
        </p>
        <p>
          <code>Hi, I'm Omotayo Olarewaju, call me Tayo... </code> 
        </p>

      </div>
      <div className="Projects">
        <div className="Project-menu">
          <ul className='Project-list' >
            <div id='Project-selector' className='Project-selector'>
              <div className="Project-selector-body"/>
              <div className="Project-selector-edge"/>
            </div>
            <li onMouseEnter={(e)=>mouseEnterHandler(e, "0px")} onMouseLeave={mouseLeaveHandler}  className='Project'>
              <SportsEsportsIcon className='Project-icon'/>
              <a 
                className='Project-link' 
                href="https://t33y.github.io/hangman/" 
                target="_blank" 
                rel="noopener noreferrer"
              >Hangman Game</a>
            </li>
            <li onMouseEnter={(e)=>mouseEnterHandler(e, "290px")} onMouseLeave={mouseLeaveHandler}  className='Project'>
              <ListAltIcon className='Project-icon'/>
              <a 
                className='Project-link' 
                href="https://t33y.github.io/todo/"
                target="_blank" 
                rel="noopener noreferrer"
              >Todo App</a>
            </li>
            <li onMouseEnter={(e)=>mouseEnterHandler(e, "580px")} onMouseLeave={mouseLeaveHandler}  className='Project'>
              <ThunderstormIcon className='Project-icon' />
              <a 
                className='Project-link' 
                href="https://t33y.github.io/weatherapp"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Weather App
              </a>
            </li>
            <li onMouseEnter={(e)=>mouseEnterHandler(e, "870px")} onMouseLeave={mouseLeaveHandler}  className='Project'>
              <WbSunnyIcon className='Project-icon'/>
              <a 
                className='Project-link' 
                href="https://t33y.github.io/weatherapp2"
                target="_blank" 
                rel="noopener noreferrer"
                >
                Weather App 2
              </a>
            </li>
            <li onMouseEnter={(e)=>mouseEnterHandler(e, "1160px")} onMouseLeave={mouseLeaveHandler}  className='Project'>
              <NoteAltIcon className='Project-icon'/>
              <a 
                className='Project-link' 
                href="https://t33y.github.io/notes"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Note App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
