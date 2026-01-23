import { useState } from 'react'
import pabloImage from './assets/pabloclicker.png'
import WinImage from './assets/PabloWin.png'
import meowSound from './assets/meoww.mp3'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const GameWon = count >= 100

  const handleClick = () => {
    setCount(count + 1)
    const pablomeow = new Audio(meowSound)
    pablomeow.play()
  }

  return (
    <div>
      {GameWon ? (
        <div className="win-container">
          <h1>YOU ARE A TRUE PABLO ENJOYER... Meow.</h1>
          <img src={WinImage} alt="pabl" className="win-image" />
          <h2 className="Gameover-text">game over... refresh the site if u wanna play again.</h2>
        </div>
      ) : (
        <>
          <h1>Pablo clicker, your goal? Click "the pab" 100 times to achieve true pablo enjoyer status.</h1>
          <h2>times clicked: {count}</h2>
          <button onClick={handleClick}>
            <img src={pabloImage} alt="pabloclicker" />
          </button>
        </>
      )}
    </div>
  )
}



export default App
