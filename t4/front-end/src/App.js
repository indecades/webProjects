import './App.css';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <div className='split left'>
        <Search/>
      </div>
     <div className='split right'>
      <div className='centered'>
      <SearchResults/>
      </div>
     </div>
    </div>
  );
}

export default App;
