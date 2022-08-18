import './Work.scss'
import workArray from '../Data/workArray'

const Work = () => {
  return (
    <div className='work-container'>
      <span className='Title-Text work-title'>WORK</span>
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  )
}

const WorkCard = (props) => {
  return (
    <div className='work-card-container'>
      <span className='work-card-title'>{props.title}</span>
      {/*Video and image if no load video*/}
      <img
        className='work-card-thumbnail-image'
        src={props.placeholder_image}
        alt={`${props.title} thumbnail image`}
      />
      <p className='work-card-description'>{props.description}</p>
    </div>
  )
}

export default Work
