import { useEffect, useState } from 'react'
import { ReactComponent as GitHub } from '../Data/github.svg'
import { ReactComponent as LinkedIn } from '../Data/linkedin.svg'
import { ReactComponent as Mail } from '../Data/mail.svg'
import './ColorHeader.scss'

const ColorHeader = (props) => {
  const [height, setHeight] = useState(0.711)

  useEffect(() => {
    const headerContainer = document.getElementById('hcc')
    const linkedInBtn = document.getElementById('lnc')
    const githubBtn = document.getElementById('gbc')
    const mailBtn = document.getElementById('mlc')
    const onScroll = () => {
      setHeight() //FIGURE OUT
      headerContainer.style.top = `${
        props.parentHeight - window.innerHeight * height
      }vh`
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [window.pageYOffset])

  return (
    <div className='c-header-container' id='hcc'>
      <a
        href='https://www.linkedin.com/in/joey-southerland-ksu'
        target='_blank'
        rel='noopener noreferrer'
        class='c-logo-linkedin'
        id='lnc'
      >
        <LinkedIn className='c-logo' id='c-linkedin' />
      </a>
      <a
        href='https://github.com/jcsoutherland'
        target='_blank'
        rel='noopener noreferrer'
        class='c-logo-github'
        id='gbc'
      >
        <GitHub className='c-logo' id='c-github' />
      </a>
      <a
        href='mailto:joeysouthy12@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        class='c-logo-mail'
        id='mlc'
      >
        <Mail className='c-logo' id='c-mail' />
      </a>
    </div>
  )
}

export default ColorHeader
