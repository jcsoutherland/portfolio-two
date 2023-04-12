import './LandingCard.scss'
import ThreeElement from './ThreeElement'
import { useEffect, useState } from 'react'

const LandingCard = () => {
  useEffect(() => {
    const onScroll = () => {
      const landingContainer = document.getElementById('landing')
      const angle = window.pageYOffset / 5
      landingContainer.style.cssText = `transform:translateY(${angle}px);`
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [window.pageYOffset])
  return (
    <div className='Landing-Card' id='landing'>
      <div className='Main-Text-Container'>
        <span className='Name-Text'>JOSEPH SOUTHERLAND's</span>
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
