import React from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE_URL } from '../utils/imgPaths'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div >
            <Header />
            <div className="absolute">
                <img src={BACKGROUND_IMAGE_URL} alt="logo" />
            </div>
            <LoginForm />
        </div>
    )
}

export default Login