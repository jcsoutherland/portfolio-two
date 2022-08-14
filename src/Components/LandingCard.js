import './LandingCard.scss'

const LandingCard = () => {
  return (
    <div className='Landing-Card'>
      <ul className='Info-Links'>
        <a
          href='https://www.linkedin.com/in/joey-southerland-ksu'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a href='/Media/Resume.pdf' target='_blank' rel='noopener noreferrer'>
          Resume
        </a>
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
