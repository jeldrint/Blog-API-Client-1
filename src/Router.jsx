import App from './App'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Log-in'
import SignUp from './components/Sign-up'
import { useState } from 'react';
import WritePost from './components/Write-Post';

const Router = () => {
    const [mainData, setMainData] = useState(null);
    const [errorMain, setErrorMain] = useState(null);
    const [loadingMain, setLoadingMain] = useState(true);
    const [loginStatus, setLoginStatus] = useState('');
    

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/techy-blog' />,
        },
        {
            path: '/techy-blog',
            element: <App mainData={mainData} errorMain={errorMain} loadingMain={loadingMain} setMainData={setMainData} setErrorMain={setErrorMain} setLoadingMain={setLoadingMain} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />,
        },
        {
            path: '/techy-blog/log-in',
            element: <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
        },
        {
            path: '/techy-blog/sign-up',
            element: <SignUp />
        },
        {
            path: '/techy-blog/:id',
            element: <App mainData={mainData} errorMain={errorMain} loadingMain={loadingMain} setMainData={setMainData} setErrorMain={setErrorMain} setLoadingMain={setLoadingMain} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />,
        },
        {
            path: '/techy-blog/:id/write-post',
            element: <WritePost />,
        },

    ])

    return <RouterProvider router={router} />
}


export default Router;