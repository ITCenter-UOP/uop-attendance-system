import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import DefultError from '../component/Errors/DefultError'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* website */}
                <Route path='/' element={<WebSite />} >
                    <Route path='*' element={<DefultError />} />
                    {/* <Route index element={<HomePage />} /> */}
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
