import logo from './logo.svg';
import { Nav } from "../src/Components/Header/Nav";
import { ImgSlide } from "../src/Components/ImgSlide/ImgSlide";
import { Quotes } from "../src/Components/Quotes/Quotes";
import { NewsLetter } from "../src/Components/NewsLetter/NewsLetter";

import './App.css';

function App() {
  return (
    <>
      <Nav />
      <ImgSlide />
      <Quotes />
      <NewsLetter />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
