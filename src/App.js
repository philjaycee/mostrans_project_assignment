import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LandPage from './Components/Landpage/LandPage'
import CardDetails from './Components/Character_Details/profile_detail'
import Location from './Components/Locations/location'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<LandPage/>} />
       <Route path="/details/:id" element={<CardDetails/>} />
       <Route path="/locations" element={<Location/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
