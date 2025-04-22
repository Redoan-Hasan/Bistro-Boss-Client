import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="min-h-screen w-full bg-[url('/assets/others/authentication.png')] bg-cover bg-center flex items-center justify-center py-16 px-4 font-inter">
            <div className="w-full max-w-7xl bg-[url('/assets/others/authentication.png')] bg-cover bg-center p-8 rounded-lg shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img 
                            src="/assets/others/authentication2.png" 
                            alt="Restaurant illustration" 
                            className="max-w-full h-auto"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                        
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Type here" 
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-1">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                                />
                            </div>
                            
                            {/* Captcha display field */}
                            <div>
                                <input 
                                    type="text" 
                                    value="U A g l u o" 
                                    readOnly
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none italic"
                                />
                                <div className="mt-1">
                                    <button type="button" className="text-blue-500 text-sm hover:underline">
                                        Reload Captcha
                                    </button>
                                </div>
                            </div>
                            
                            {/* Captcha input field */}
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Type here" 
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full bg-[#D1A054] text-white py-3 rounded hover:bg-[#c08b3b] transition-colors"
                            >
                                Sign In
                            </button>
                        </form>
                        
                        <div className="mt-6 text-center">
                            <p className="text-sm text-[#D1A054]">New here? <Link to="/register" className="text-[#D1A054] font-bold">Create a New Account</Link></p>
                            
                            <div className="mt-4">
                                <p className="text-sm mb-2">Or sign in with</p>
                                <div className="flex justify-center space-x-4">
                                    <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">
                                        <FaFacebookF />
                                    </button>
                                    <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">
                                        <FaGoogle />
                                    </button>
                                    <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">
                                        <FaGithub />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;