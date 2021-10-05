// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const activeImageClass = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="list-item">
      <button className="image-button" type="button" onClick={onClickEvent}>
        <img
          src={imageUrl}
          alt="event"
          className={activeImageClass}
          onClick={onClickEvent}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
