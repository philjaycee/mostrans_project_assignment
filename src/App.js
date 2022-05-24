import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LandPage from './Components/Landpage/LandPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<LandPage/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
