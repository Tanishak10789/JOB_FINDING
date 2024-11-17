import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading, setUser } from '@/redux/authSlice'
// import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        role: '',
    });
    // const { loading, user } = useSelector((store) => store.auth);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        // try {
        //     dispatch(setLoading(true));
        //     const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         withCredentials: true,
        //     });
        //     if (res.data.success) {
        //         dispatch(setUser(res.data.user));
        //         navigate("/");
        //         toast.success(res.data.message);
        //     }
        // } catch (error) {
        //     console.log(error);
        //     toast.error(error.response.data.message);
        // } finally {
        //     dispatch(setLoading(false));
        // }
        console.log(input);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <Navbar />
            <div className="flex items-center justify-center w-full">
                <form
                    onSubmit={submitHandler}
                    className="w-full max-w-2xl bg-white shadow-2xl rounded-lg p-12 border border-gray-300 mx-4"
                >
                    <h1 className="font-bold text-3xl mb-8 text-center text-gray-800">Login</h1>

                    {/* Email Input */}
                    <div className="mb-6">
                        <Label className="text-gray-700">Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="markus@gmail.com"
                            className="w-full mt-3 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <Label className="text-gray-700">Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="••••••••"
                            className="w-full mt-3 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Role Selection (Radio Buttons) */}
                    <div className="mb-8">
                        <Label className="text-gray-700">Select Your Role</Label>
                        <RadioGroup className="flex items-center gap-8 mt-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </Button>

                    {/* Signup Link */}
                    <div className="text-center mt-6">
                        <span className="text-sm text-gray-700">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-600 hover:underline">
                                Signup
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
