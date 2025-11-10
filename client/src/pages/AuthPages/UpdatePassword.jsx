import React, { useEffect, useState } from 'react';
import ICTCenterImg from '../../assets/uopict.jpg';
import DefaultInput from '../../component/Form/DefaultInput';
import DefaultButton from '../../component/Buttons/DefaultButton';
import Toast from '../../component/Toast/Toast';
import useForm from '../../hooks/useForm';
import uoplogo from '../../assets/uoplogo.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const UpdatePassword = () => {
    const token = localStorage.getItem('emailverify')
    const navigate = useNavigate();
    const { verifyEmailInfo, handleEmailVerificationToken } = useAuth()

    useEffect(() => {
        if (!token) {
            navigate('/', { replace: true });
        }
    }, [token, navigate]);

    useEffect(() => {
        if (!verifyEmailInfo.email && token) {
            try {
                handleEmailVerificationToken(token);
            } catch (err) {
                localStorage.clear();
                navigate('/');
            }
        }
    }, [verifyEmailInfo, token, handleEmailVerificationToken, navigate]);

    const { values, handleChange } = useForm({
        newpass: '',
        newpassword: '',
    });

    const [toast, setToast] = useState(null);

    const headleSubmit = (e) => {
        e.preventDefault();

        if (values.email === 'admin@demo.com' && values.password === '123456') {
            setToast({ success: true, message: 'Login successful!' });
        } else {
            setToast({ success: false, message: 'Invalid credentials. Try again!' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="relative hidden md:flex md:w-1/2">
                <img
                    src={ICTCenterImg}
                    alt="ICT Center"
                    className="object-cover w-full h-full"
                />

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="absolute bottom-10 left-10 text-white">
                    <img src={uoplogo} alt="" className='h-16 w-auto' />

                    <h2 className="text-3xl font-bold ">Information Technology Centre </h2>
                    <h1 className="text-2xl mb-2">University of Peradeniya</h1>
                    <p className="text-gray-200 max-w-sm">
                        Empowering innovation, technology, and learning excellence.
                    </p>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-16 bg-white">

                <div className="absolute top-5 right-5 z-50">
                    {toast && (
                        <Toast
                            success={toast.success}
                            message={toast.message}
                            onClose={() => setToast(null)}
                        />
                    )}
                </div>

                <div className="w-full max-w-md">

                    <div className="md:hidden">
                        <center className='mb-4'>
                            <img src={uoplogo} alt="" className='h-16 w-auto' />
                            <h2 className="font-bold ">Information Technology Centre </h2>
                        </center>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
                        Update Password
                    </h1>
                    <p className="text-gray-500 text-center mb-8">
                        Update Your Password with New One
                    </p>

                    <form onSubmit={headleSubmit}>
                        <DefaultInput
                            label="New Password"
                            type="password"
                            name="newpass"
                            value={values.newpass}
                            onChange={handleChange}
                            placeholder="Enter your OTP"
                            required
                        />

                        <DefaultInput
                            label="Confirm New Password"
                            type="password"
                            name="newpass"
                            value={values.newpassword}
                            onChange={handleChange}
                            placeholder="Confirm Your Password"
                            required
                        />


                        <DefaultButton label="Update Password" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
