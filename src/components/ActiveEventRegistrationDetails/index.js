// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  register: 'REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-view">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt=" yet to register"
        className="images"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="reg-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisterView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="register"
        className="reg-img"
      />
      <p>You have already registered for the event</p>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const renderDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      case registrationStatus.register:
        return renderRegisterView()

      default:
        return renderNoActiveEventView()
    }
  }

  return <div className="reg-status-container">{renderDetails()}</div>
}
export default ActiveEventRegistrationDetails
