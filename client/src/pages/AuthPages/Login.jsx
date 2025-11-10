import React, { useState } from 'react';
import ICTCenterImg from '../../assets/uopict.jpg';
import DefaultInput from '../../component/Form/DefaultInput';
import DefaultButton from '../../component/Buttons/DefaultButton';
import Toast from '../../component/Toast/Toast';
import useForm from '../../hooks/useForm';
import uoplogo from '../../assets/uoplogo.png'

const Login = () => {
    const { values, handleChange } = useForm({
        email: '',
        password: '',
    });

    const [toast, setToast] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();

        if (values.email === 'admin@demo.com' && values.password === '123456') {
            setToast({ success: true, message: 'Login successful!' });
        } else {
            setToast({ success: false, message: 'Invalid credentials. Try again!' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side image with dark gradient */}
            <div className="relative hidden md:flex md:w-1/2">
                <img
                    src={ICTCenterImg}
                    alt="ICT Center"
                    className="object-cover w-full h-full"
                />
                {/* Dark gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div> */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="">
                    <img src={uoplogo} alt="" />
                </div>


                {/* Optional overlay text */}
                <div className="absolute bottom-10 left-10 text-white">
                    <h2 className="text-3xl font-bold mb-2">University ICT Center</h2>
                    <p className="text-gray-200 max-w-sm">
                        Empowering innovation, technology, and learning excellence.
                    </p>
                </div>
            </div>

            {/* Right side form section */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-16 bg-white">
                {/* Toast Message */}
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
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-center mb-8">
                        Please log in to continue to your dashboard.
                    </p>

                    <form onSubmit={handleLogin}>
                        <DefaultInput
                            label="Email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />

                        <DefaultInput
                            label="Password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />

                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-sm text-gray-600">
                            </label>
                            <a href="/forgot-password" className="text-sm text-[#560606] hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <DefaultButton label="Login" type="submit" />
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-8">
                        Don’t have an account?{' '}
                        <a href="/register" className="text-[#560606] font-semibold hover:underline">
                            Create one
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
