import './Card.scss'
import Work from './Work'

const Card = () => {
  return (
    <div className='Card-Container'>
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
