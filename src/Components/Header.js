import './Header.scss'

const Header = () => {
  return (
    <div className='header-container'>
      {/*<a
        href='https://docs.google.com/document/d/1T1dis5A7hxpN7cWYo0mCRFWYkgZddsuto-aQPJiRh7Q/edit?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
      >
        RESUME
      </a>*/}
      <ul className='Info-Links'>
        <a
          href='https://www.linkedin.com/in/joey-southerland-ksu'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='logo'
            src='/Media/linkedin.svg'
            alt='LinkedIn Logo/Button'
          />
        </a>
        <a
          href='https://github.com/jcsoutherland'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='logo'
            src='/Media/github.svg'
            alt='Github Logo/Button'
          />
        </a>
        <a
          href='mailto:joeysouthy12@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='logo' src='/Media/mail.svg' alt='Mail Logo/Button' />
        </a>
      </ul>
    </div>
  )
}

export default Header
