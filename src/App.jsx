import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddPet from './Components/AddPet'
// import ViewPets from './Components/ViewPets'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddPet />}></Route>
          {/* <Route path='/view-pets' element={<ViewPets />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
