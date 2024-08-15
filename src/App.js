import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/Search';
import MusicPlayer from './components/UI';
import { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
    <Search setinput={setSearchInput} />
   <MusicPlayer seacrhinput={searchInput}/>

   </>
  );
}

export default App;
