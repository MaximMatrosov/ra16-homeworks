import logo from './logo.svg';
import './App.css';
import Portfolio from './Portfolio';
import images from './data';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Portfolio data={images} />
      </div>
    </div>
  );
}

export default App;
