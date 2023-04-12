import './Card.scss'
import Work from './Work'
import ColorHeader from './ColorHeader'
import { useEffect, useState } from 'react'

const Card = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(document.getElementById('CC-1').getBoundingClientRect().top)
  }, [])
  return (
    <div className='Card-Container' id='CC-1'>
      <div className='spacer-container'>
        <div className='spacer wave-layer-3' />
        <div className='spacer wave-layer-2' />
        <div className='spacer wave-layer-1' />
      </div>
      <div className='Card-Box'>
        <Work />
      </div>
    </div>
  )
}

export default Card
