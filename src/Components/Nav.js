import { useEffect, useState } from 'react'
import './Nav.scss'

const Nav = () => {
  const SECTION_COUNT = 4
  const sectionArray = ['Landing', 'Work', 'About', 'Contact']
  const [current, setCurrent] = useState(null)
  /*useEffect(() => {
    setCurrent(document.getElementById('Landing'))
    current.classList.add('current')
  }, [])*/
  return (
    <div className='nav-container'>
      {sectionArray.map((label, index) => {
        return <div className='nav-indicator' id={label} key={index} />
      })}
    </div>
  )
}

export default Nav
