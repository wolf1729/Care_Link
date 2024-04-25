import patientHomePageImage from '../assets/homepagePatient.jpg'
import '../styles/patientHomePageStyle.css'

function PatientHomepage() {
    return (
        <>
        <div className='patientHomepageMainContainer'>
            <div className='patientHomepageInfoContainer'>
                <p className='info mainHeading'>Access goverment hospital services easily</p>
                <p className='info subHeading'>Book appointment manage prescription, check doctor availability. User-friendly interface</p>
                <button className='info button-9'>Sign Up</button>
            </div>
            <div className='patientHomepageImgContainer'>
                <img src={patientHomePageImage} alt="h" />
            </div>
        </div>
        </>
    )
}

export default PatientHomepage