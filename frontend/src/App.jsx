import React, { useState } from 'react'; // Ensure React and useState are imported
import './App.css'; // Import your CSS file
import Navbar from './components/shared/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    </>
  );
}

export default App;
