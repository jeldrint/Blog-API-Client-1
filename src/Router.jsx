import App from './App'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Log-in'
import SignUp from './components/Sign-up'
import { useState } from 'react';

const Router = () => {
    const [data, setData] = useState(null);
    const [errMainData, setErrMainData] = useState(null);
    const [loadingMainData, setLoadingMainData] = useState(true);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/techy-blog' />,
        },
        {
            path: '/techy-blog',
            element: <App data={data} error={errMainData} loading={loadingMainData} setData={setData} setError={setErrMainData} setLoading={setLoadingMainData} />,
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