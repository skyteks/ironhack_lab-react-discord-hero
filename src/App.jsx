import { useState } from 'react';
import './App.css';
import logo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import backgroundPicture from "./assets/discord-background.png"

function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} alt='logo' />
                <button>
                    <img src={menuIcon} alt='logo' />
                </button>
            </header>
            <main>
                <h1>
                    IMAGINE A
                    <br />
                    PLACE...
                </h1>
                <div className='text-block'>
                    <p>
                        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </p>
                </div>
                <div className='buttons-block'>
                    <button className='button white'>Download for Mac</button>
                    <button className='button black'>Open Discord in your browser</button>
                </div>
            </main>
            <img className='background' src={backgroundPicture} alt="background picture" />
        </div>
    );
}

export default App;