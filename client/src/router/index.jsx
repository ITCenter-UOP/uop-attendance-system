import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import DefultError from '../component/Errors/DefultError'
import Login from '../pages/AuthPages/Login'
import CreateAccount from '../pages/AuthPages/CreateAccount'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* website */}
                <Route path='/' element={<WebSite />} >
                    <Route path='*' element={<DefultError />} />
                    <Route index element={<Login />} /> 
                    <Route path='/create-account' element={<CreateAccount /> } />
                    {/* <Route path='create-account' element={<CreateAccount />} />
                    <Route path='verify-email' element={<VerifyEmail />} />
                    <Route path='login' element={<Login />} />
                    <Route path='forget-password' element={<ForgetPassword />} />
                    <Route path='verify-otp' element={<VerifyOTP />} />
                    <Route path='update-password' element={<UpdatePassword />} /> */}
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
