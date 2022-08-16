import './Card.scss'

const Card = () => {
  return (
    <div className='Card-Container'>
      <div className='spacer-container'>
        <div className='spacer wave-layer-3' />
        <div className='spacer wave-layer-2' />
        <div className='spacer wave-layer-1' />
      </div>
      <div className='Card-Box' />
    </div>
  )
}

export default Card
