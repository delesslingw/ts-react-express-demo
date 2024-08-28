import React, { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('/api/items').then(res => res.json()).then(setItems)
  }, [])
  return (
    <main>
      <h1>HOLA MUNDO</h1>
      {items.map(item => <p>{item}</p>)}
    </main>
  );
}

export default App;
