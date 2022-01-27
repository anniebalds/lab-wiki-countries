import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />

          <Routes>
          <Route path='/' element={<CountriesList  countries={countries}/>} >
          <Route path='/:id' element={<CountryDetails countries={countries} />}/>
          </Route>
          </Routes>

    </div>
  )
}

export default App;