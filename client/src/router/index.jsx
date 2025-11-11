import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import DefultError from '../component/Errors/DefultError'
import Login from '../pages/AuthPages/Login'
import CreateAccount from '../pages/AuthPages/CreateAccount'
import ForgetPassword from '../pages/AuthPages/ForgetPassword'
import VerifyEmail from '../pages/AuthPages/VerifyEmail'
import VerifyOTP from '../pages/AuthPages/VerifyOTP'
import UpdatePassword from '../pages/AuthPages/UpdatePassword'
import Dashboard from '../layouts/Dashboard'
import DashError from '../component/Errors/DashError'
import PrivateRoute from './PrivateRoute'
import DashHome from '../pages/Dashboard/DashHome'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />} >
                    <Route path='*' element={<DefultError />} />
                    <Route index element={<Login />} />
                    <Route path='create-account' element={<CreateAccount />} />
                    <Route path='forget-password' element={<ForgetPassword />} />
                    <Route path='verify-account' element={<VerifyEmail />} />
                    <Route path='verify-otp' element={<VerifyOTP />} />
                    <Route path='update-password' element={<UpdatePassword />} />

                    <Route path='/Dashboard' element={<PrivateRoute roles={['admin', 'supervisor']}><Dashboard /></PrivateRoute>}>
                        <Route path='*' element={<PrivateRoute roles={['admin', 'supervisor']}><DashError /> </PrivateRoute>} />
                        <Route index element={<PrivateRoute roles={['admin', 'supervisor']}><DashHome /> </PrivateRoute>} />
                    </Route>

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
