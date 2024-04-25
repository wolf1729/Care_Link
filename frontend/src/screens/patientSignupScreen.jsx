import patient2 from '../assets/patient2.jpg'
import PatientSignupComponent from '../components/patientSignUpComponent'
import  '../styles/loginsignupScreenStyle.css'

function PatientSignupScreen() {
    return (
        <>
        <div className='loginSignupMainContainer'>
            <div className='loginSignupimgContainer'>
                <img src={patient2} alt="" />
            </div>
            <div className='loginSignupContainer'>
                <PatientSignupComponent />
            </div>
        </div>
        </>
    )
}

export default PatientSignupScreen