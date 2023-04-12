import { useEffect, useState } from 'react'
import { ReactComponent as GitHub } from '../Data/github.svg'
import { ReactComponent as LinkedIn } from '../Data/linkedin.svg'
import { ReactComponent as Mail } from '../Data/mail.svg'
import './Header.scss'

const Header = (props) => {
  useEffect(() => {
    const onScroll = () => {
      const headerContainer = document.getElementById('hc')
      const linkedInBtn = document.getElementById('ln')
      const githubBtn = document.getElementById('gb')
      const mailBtn = document.getElementById('ml')
      const angle = window.pageYOffset / 6.5
      if (angle < 90) {
        headerContainer.style.cssText = `transform:rotate(-${angle}deg);`
        linkedInBtn.style.cssText = `transform:rotate(${angle}deg);`
        githubBtn.style.cssText = `transform:rotate(${angle}deg);`
        mailBtn.style.cssText = `transform:rotate(${angle}deg);`
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [window.pageYOffset])

  return (
    <div className='header-container' id='hc'>
      <a
        href='https://www.linkedin.com/in/joey-southerland-ksu'
        target='_blank'
        rel='noopener noreferrer'
        class='logo-linkedin'
        id='ln'
      >
        <LinkedIn className='logo' fill='#f1f1f1' />
      </a>
      <a
        href='https://github.com/jcsoutherland'
        target='_blank'
        rel='noopener noreferrer'
        class='logo-github'
        id='gb'
      >
        <GitHub className='logo' fill='#f1f1f1' />
      </a>
      <a
        href='mailto:joeysouthy12@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        class='logo-mail'
        id='ml'
      >
        <Mail className='logo' fill='#f1f1f1' />
      </a>
    </div>
  )
}

export default Header
