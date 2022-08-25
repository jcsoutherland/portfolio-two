import Header from './Header'
import './LandingCard.scss'
import ThreeElement from './ThreeElement'

const LandingCard = () => {
  return (
    <div className='Landing-Card'>
      <div className='Main-Text-Container'>
        <span className='Name-Text'>JOEY SOUTHERLAND's</span>
        <span className='Title-Text'>PORTFOLIO</span>
        <span className='Title-Subtext'>
          Developer dedicated to building beautiful modern websites and
          applications
        </span>
      </div>
      <ThreeElement />
    </div>
  )
}

export default LandingCard
