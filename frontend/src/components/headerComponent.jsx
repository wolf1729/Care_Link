import '../styles/headerStyle.css'
import { Switch, Button } from '@chakra-ui/react'
import { useState } from 'react'

function HeaderComponent() {
    // eslint-disable-next-line no-unused-vars
    const [isChecked, setIsChecked] = useState(true)

    return (
        <>
        <div className="headerMainContainer">
            <p className="siteName">Care Link</p>
            <Switch size='lg' className='patientDoctorSwitch'/>
            <Button colorScheme='blue' className='patientLoginButton'>Login</Button>
        </div>
        </>
    )
}

export default HeaderComponent