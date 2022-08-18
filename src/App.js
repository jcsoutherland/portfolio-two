import './App.scss'
import Card from './Components/Card'
import Header from './Components/Header'
import LandingCard from './Components/LandingCard'
import Nav from './Components/Nav'

function App() {
  return (
    <div className='App'>
      {/*<Nav />*/}
      <Header />
      <LandingCard />
      <Card />
    </div>
  )
}

export default App
