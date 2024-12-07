import logo from './logo.svg';
import './App.css';

const App = () => {
  const headerContent = (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. This is a test. please work
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React, this is a test for cursor.io
      </a>
    </>
  );

  return (
    <div className="App">
      <header className="App-header">
        {headerContent}
      </header>
    </div>
  );
};

export default App;
