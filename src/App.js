import './App.css';
import Products from './Components/Products';
import SearchBar from './Components/SearchBar';

const App = () => {
  return (
    <div className='App'>
      <h1>Beer Factory</h1>
      <SearchBar />
      <Products />
    </div>
  );
};

export default App;
