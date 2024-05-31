import App from './App'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Log-in'
import SignUp from './components/Sign-up'
import { useState } from 'react';

const Router = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/techy-blog' />,
        },
        {
            path: '/techy-blog',
            element: <App data={data} error={error} loading={loading} setData={setData} setError={setError} setLoading={setLoading} />,
        },
        {
            path: '/techy-blog/log-in',
            element: <Login data={data} />
        },
        {
            path: '/techy-blog/sign-up',
            element: <SignUp />
        }
    ])

    return <RouterProvider router={router} />
}


export default Router;