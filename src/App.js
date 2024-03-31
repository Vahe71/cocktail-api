import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchCocktails } from './store/cocktailSlice';
import Header from './features/template/header/Header';
import Section from './features/template/section/Section';

function App() {

  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  );
}

export default App;
