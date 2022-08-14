import './RopeAndPulley.scss'

const RopeAndPully = () => {
  return (
    <div className='Landing-Container'>
      <div className='Rod-Container'>
        <img
          src='/media/RodHolderLeft.svg'
          alt='rod holder left'
          className='Rod-Holder-Left'
        />
        <img
          src='/media/RodHolderRight.svg'
          alt='rod holder right'
          className='Rod-Holder-Right'
        />
        <div className='Wheel-Rod-Container'>
          <div className='Wheel-Rod' />
        </div>
        <div className='Wheel-Container'>
          <img src='/media/Wheel-L.svg' alt='wheel left' className='Wheel-L' />
          <img src='/media/Wheel-R.svg' alt='wheel right' className='Wheel-R' />
          <div className='Rope-Container-L'>
            <div className='Rope-T' />
            <div className='Rope-L' />
            <div className='Rope-B' />
          </div>
          <div className='Rope-Container-R'>
            <div className='Rope-T' />
            <div className='Rope-R' />
            <div className='Rope-B' />
          </div>
        </div>
      </div>
      <div className='flexbox'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
    </div>
  )
}

export default RopeAndPully
