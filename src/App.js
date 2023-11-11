
import './App.css';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function App() {
  var arr=["Yes", "Probably Not", "No", "May be", "Lets go"];
  const [isHover, setIsHover] = useState(false);

  function handleclick(){
    setIsHover(false);
  }

  function mouseHoverHandler(){
    setIsHover(true);
     
  }

  function mouseLeave(){
    setIsHover(false);
  }

  return (
    <div className='container'>
      <div onMouseLeave={mouseLeave} className="app">
        <h1>Should you use a dropdown? </h1>
        <button onMouseEnter={mouseHoverHandler}  className='button'>
          Select
          <span><KeyboardArrowDownIcon/></span>
        </button>
        {isHover? <div className='items'>
          {arr.map((item, key)=>(
            <button key={key} onClick={handleclick}>{item}</button>
          ))}
        </div> : null}
      </div>
    </div>
  );
}

export default App;
