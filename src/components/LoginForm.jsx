import React, { useRef, useState } from 'react'
import { isValid } from '../utils/validation';

const LoginForm = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => setIsSignInForm(!isSignInForm)
    
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const validResponse = isValid(email.current.value, password.current.value)
        console.log(validResponse);
    }
    return (
        <div>
            <form 
                className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg"
                onSubmit={(e) => e.preventDefault()}
                >
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up "}
                </h1>

                {
                    (!isSignInForm) && 
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700" />
                }

                <input
                    type="text"
                    placeholder="Email Address"
                    ref={email}
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <input
                    type="password"
                    placeholder="Password"
                    ref={password}
                    className="p-4 my-4 w-full bg-gray-700"
                />
                
                {
                    (!isSignInForm) && 
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        className="p-4 my-4 w-full bg-gray-700" />
                }

                <button className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    { isSignInForm ? "Sign In" : "Sign Up" }
                </button>
                
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {
                        isSignInForm ? "New to Binge Box? Sign Up Now" : "Already registered? Sign In Now!"
                    }
                </p>
            </form>
        </div>
    )
}

export default LoginForm