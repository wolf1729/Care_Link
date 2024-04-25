import { Button } from '@chakra-ui/react'
import '../styles/signupLoginComponentStyle.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

/* eslint-disable react/no-unescaped-entities */
function PatientLoginComponent() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
        <div className='patientLoginMainContainer'>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <Button colorScheme='blue'>Login</Button>
            <p>Don't have an account?<span className='signuppoint' onClick={() => navigate('/patientSignupScreen')}>SignUp</span></p>
        </div>
        </>
    )
}

export default PatientLoginComponent