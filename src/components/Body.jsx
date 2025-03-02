import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Header />
        }, 
    ]);
    return (
        <RouterProvider router={appRouter}/>
    )
}

export default Body