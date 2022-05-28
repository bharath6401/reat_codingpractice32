// Write your code here

const ActiveEventRegistration = properties => {
  const {status} = properties
  console.log(status)

  const initialView = () => {
    const new1 = 0
    return (
      <div>
        <h1>Click on an event, to view its registration details</h1>
      </div>
    )
  }

  const registeredView = () => {
    const new1 = 0

    return (
      <div className="registeredStatusContainer">
        <img
          className="regstrationStatusImage d-flex flex-column align-items-center justify-content-center"
          alt="registered"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        />
        <p>You have already registered </p>
      </div>
    )
  }

  const yetToRegister = () => {
    const new1 = 0

    return (
      <div className="registeredStatusContainer">
        <img
          className="regstrationStatusImage col-9"
          alt="yet to register"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        />
        <p>A live performance brings so much</p>
        <button>Register Here</button>
      </div>
    )
  }

  const registrationsClosed = () => {
    const new1 = 0

    return (
      <div className="registeredStatusContainer">
        <img
          className="regstrationStatusImage col-9"
          alt="registrations closed"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        />
        <h1>Registrations Are Closed Now</h1>
        <p>Stay tuned. We will reopen the registrations soon!</p>
      </div>
    )
  }

  switch (status) {
    case 'INITIAL':
      return initialView()

    case 'REGISTERED':
      return registeredView()
    case 'YET_TO_REGISTER':
      return yetToRegister()

    case 'REGISTRATIONS_CLOSED':
      return registrationsClosed()

    default:
      return initialView()
  }
}

export default ActiveEventRegistration
