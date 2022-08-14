import './LandingCard.scss'

const LandingCard = () => {
  return (
    <div className='Landing-Card'>
      <ul className='Info-Links'>
        <a href='#'>LinkedIn</a>
        <a href='#'>Resume</a>
      </ul>
      <div className='Main-Text-Container'>
        <span className='Name-Text'>JOEY SOUTHERLAND's</span>
        <span className='Title-Text'>PORTFOLIO</span>
        <span className='Title-Subtext'>
          Web developer dedicated to building beautiful modern websites.
        </span>
      </div>
      <img
        className='Landing-Image'
        src='/media/IsometricRoom.png'
        alt='isometric room picture'
      />
    </div>
  )
}

export default LandingCard
