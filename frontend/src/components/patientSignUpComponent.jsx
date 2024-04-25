import { Button } from '@chakra-ui/react'
import '../styles/signupLoginComponentStyle.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

/* eslint-disable react/no-unescaped-entities */
function PatientSignupComponent() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return (
        <>
        <div className='patientLoginMainContainer'>
            <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <Button colorScheme='blue'>Sign Up</Button>
            <p>Already have an account?<span className='signuppoint' onClick={() => navigate('/patientLoginScreen')}>Login</span></p>
        </div>
        </>
    )
}

export default PatientSignupComponent