import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../src/App'
import PatientLoginScreen from "../src/screens/patientLoginScreen";
import PatientSignupScreen from "../src/screens/patientSignupScreen";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "/patientLoginScreen",
            element: <PatientLoginScreen />
        },
        {
            path: "/patientSignupScreen",
            element: <PatientSignupScreen />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;