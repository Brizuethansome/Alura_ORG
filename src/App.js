import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src='/img/headersi.png' alt='org'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Marti con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenden React
        </a>
      </header>
    </div>
  );
}

export default App;
