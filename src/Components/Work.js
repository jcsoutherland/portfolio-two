import './Work.scss'
import workArray from '../Data/workArray'
import iconsArray from '../Data/iconsArray'

const Work = () => {
  return (
    <div className='work-container'>
      <span className='Title-Text work-title'>WORK</span>
      {workArray.map((e, index) => {
        return (
          <WorkCard
            key={index}
            video={e.video}
            name={e.name}
            placeholderimage={e.placeholderimage}
            description={e.description}
            codelink={e.codelink}
            websitelink={e.websitelink}
            tech={e.tech}
          />
        )
      })}
    </div>
  )
}

const WorkCard = (props) => {
  return (
    <div className='work-card-container'>
      <div className='work-name-container'>
        <span className='work-card-name'>{props.name}</span>
        {/*Video and image if no load video*/}
        <img
          className='work-card-thumbnail-image'
          src={props.placeholderimage}
          alt={`${props.name} thumbnail image`}
        />
      </div>
      <div className='work-description-container'>
        <div className='work-card-description'>
          {props.description}
          <div className='work-tech-container'>
            <span className='tech-label'>Tech: </span>
            {iconsArray.map((e, index) => {
              if (props.tech.includes(e)) {
                return (
                  <img
                    key={index}
                    className='tech-icon'
                    src={`/Media/technology-icons/${e}.svg`}
                    alt={`${e} icon`}
                  />
                )
              }
            })}
          </div>
        </div>
        <div className='work-button-container'>
          <div
            className={`work-card-button ${
              props.codelink === '' && 'button-disabled'
            }`}
            onClick={() => {
              window.open(props.codelink, '_blank')
            }}
          >
            CODE
          </div>
          <div
            className={`work-card-button ${
              props.websitelink === '' && 'button-disabled'
            }`}
            onClick={() => {
              window.open(props.websitelink, '_blank')
            }}
          >
            WEBSITE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
