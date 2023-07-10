import { useEffect } from 'react'
import ReactGA from 'react-ga'


import Home from './pages/Home'

const TRACKING_ID = "UA-163982195-1";

ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.event({category: 'Home', action: 'View', label: 'Page View'});
  },[])

  return (
    <Home />
  )
}

export default App
