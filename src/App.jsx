import { useEffect } from 'react'
import ReactGA from 'react-ga'


import Home from './pages/Home'

const TRACKING_ID = "G-NSX85F02JZ";

ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.send({hitType: 'pageView', page: '/'});
  },[])

  return (
    <Home />
  )
}

export default App
