// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemProps, eventItemClicked, selected} = props
  const {imageUrl, name, location, id, registrationStatus} = eventItemProps
  //   console.log(registrationStatus)
  console.log(selected)
  const eventItemClicked1 = event => {
    // console.log(element)
    eventItemClicked(registrationStatus, id)
  }

  return (
    <li className="d-flex flex-column col-5">
      <img
        id={id}
        className={`${selected && 'Selected'}`}
        onClick={eventItemClicked1}
        value={registrationStatus}
        alt="event"
        src={imageUrl}
      />
      <h3>{name}</h3>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
