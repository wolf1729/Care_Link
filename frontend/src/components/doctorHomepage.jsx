/* eslint-disable react/no-unescaped-entities */
import '../styles/doctorHomepageStyle.css'
import { Button } from "@chakra-ui/react"

function DoctorHomepage() {
    return (
        <>
        <div className="doctorHomepageMainContainer">
            <div className='doctorHomepageMainHeadingContainer'>
                <p className='doctorHomepageMainHeading'>Welcome to Our Hospital's</p>
                <p className='doctorHomepageMainHeading'>Doctor Login Portal</p>
            </div>
            <p>Unlock Your Medical Expertise: Convenient Doctor Login with Facial</p>
            <p>Recognition and Email-Password Authentication</p>
            <Button color='red' className='doctorLoginButton'>Login</Button>
        </div>
        </>
    )
}

export default DoctorHomepage