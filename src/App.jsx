import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [cart, setCart] = useState([1, 2]);
  return (
    <>
      <Header cart={{ items: cart, setCart }} />
      <Main />
    </>
  );
}

export default App;
