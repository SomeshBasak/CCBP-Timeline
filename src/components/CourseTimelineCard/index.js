import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="courseTitleAndDurationContainer">
        <h1 className="courseTitle">{courseTitle}</h1>
        <div className="durationContainer">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="courseDescription">{description}</p>
      <ul className="courseTagsList">
        {tagsList.map(eachTag => (
          <li className="courseTagItem" key={eachTag.id}>
            <p className="courseTag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CourseTimelineCard
