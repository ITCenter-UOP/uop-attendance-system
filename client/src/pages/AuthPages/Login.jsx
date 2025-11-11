import React, { useState } from 'react';
import ICTCenterImg from '../../assets/uopict.jpg';
import DefaultInput from '../../component/Form/DefaultInput';
import DefaultButton from '../../component/Buttons/DefaultButton';
import Toast from '../../component/Toast/Toast';
import useForm from '../../hooks/useForm';
import uoplogo from '../../assets/uoplogo.png';
import { useAuth } from '../../context/AuthContext';
import { jwtDecode } from "jwt-decode";
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [Loading, setLoading] = useState(false);

    const { values, handleChange } = useForm({
        email: '',
        password: '',
    });

    const [toast, setToast] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await API.post('/auth/login', values, {
                headers: { "Content-Type": "application/json" },
            });

            if (res.data.success === true) {
                setToast({ success: true, message: res.data.message });
                login(res.data.token);

                const decoded = jwtDecode(res.data.token);
                const role = decoded?.role;

                if (role === "admin" || role === "staff") {
                    setTimeout(() => navigate('/Dashboard'), 2000);
                } else if (role === "user") {
                    setTimeout(() => navigate('/my-account'), 2000);
                } else {
                    setTimeout(() => navigate('/'), 2000);
                }
            } else {
                setToast({ success: false, message: res.data.message });
                return; 
            }
        } catch (err) {
            const message =
                err.response?.data?.message || "Request failed. Please try again.";
            setToast({ success: false, message });
        } finally {
            setLoading(false);
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
                    <h2 className="text-3xl font-bold">Information Technology Centre</h2>
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
                            <h2 className="font-bold">Information Technology Centre</h2>
                        </center>
                    </div>

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
                            <label className="flex items-center text-sm text-gray-600"></label>
                            <a href="/forget-password" className="text-sm text-[#560606] hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <DefaultButton label={Loading ? "Logging in..." : "Login"} type="submit" />
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-8">
                        Don’t have an account?{' '}
                        <a href="/create-account" className="text-[#560606] font-semibold hover:underline">
                            Create one
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
