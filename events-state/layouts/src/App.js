import './App.css';
import products from './products';
import Store from './Store';

function App() {
  return (
    <div className="App">
      <Store data={products}/>
    </div>
  );
}

export default App;
