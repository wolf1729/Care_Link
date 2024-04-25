import "../src/styles/headerStyle.css"
import { useState } from "react"
import { Switch } from "@chakra-ui/react"
import PatientLoginScreen from "./screens/patientLoginScreen"
import DoctorHomepage from "./components/doctorHomepage"

function App() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
  <>
  <div className="headerMainContainer">
    <p className="siteName">Care Link</p>
    <Switch size='lg' className='patientDoctorSwitch' onChange={handleChange} isChecked={isChecked}/>
  </div>
  {isChecked ? <DoctorHomepage /> : <PatientLoginScreen />}
  </>
)
}

export default App
