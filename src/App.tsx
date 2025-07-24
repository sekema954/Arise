import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';
import Footer from './components/footer';
import StoreFront from './pages/marketplace/storefront';
import PlayerDetails from './pages/hunters/playerDetails';
import { Body_font } from './constants/fonts';
import Store from './pages/marketplace/store';
import Mission_details from './pages/hunters/missionDetails';
const App = () => {
  return(
    <div style={{...Body_font}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<StoreFront />}></Route>
          <Route path='/player/:id' element={<PlayerDetails />}></Route>
          <Route path='/store/:category' element={<Store />}></Route>
          <Route path='/mission_details/:id' element={<Mission_details />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App