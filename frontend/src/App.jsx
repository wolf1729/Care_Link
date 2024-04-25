import "../src/styles/headerStyle.css"
import { useState } from "react"
import { Switch } from "@chakra-ui/react"
import PatientHomeScreen from "./screens/patientHomeScreen"
import DoctorHomeScreen from "./screens/doctorHomeScreen"

function App() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
  <>
  <div className="headerMainContainer">
    <p className="siteName">Care Link</p>
    <Switch size='lg' className='patientDoctorSwitch' onChange={handleChange} isChecked={isChecked} colorScheme="red"/>
  </div>
  {isChecked ? <DoctorHomeScreen /> : <PatientHomeScreen />}
  </>
)
}

export default App
