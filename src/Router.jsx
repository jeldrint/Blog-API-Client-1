import App from './App'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import Login from './components/Log-in'
import SignUp from './components/Sign-up'
import { useState } from 'react';
import { useToken } from './useToken';

import WritePost from './components/Post-Write';
import UpdatePost from './components/Post-Update';
import DeletePost from './components/Post-Delete';


const Router = () => {
    const [mainData, setMainData] = useState({});
    const [errorMain, setErrorMain] = useState(null);
    const [loadingMain, setLoadingMain] = useState(true);
    const [loginStatus, setLoginStatus] = useState('');
    const [blogPost, setBlogPost] = useState({});
    const {token, setToken} = useToken()
    const router = createHashRouter([
        {
            path: '/',
            element: <Navigate to='/techy-blog' />,
        },

        //This is Public Page
        {
            path: '/techy-blog',
            element: <App mainData={mainData} errorMain={errorMain} loadingMain={loadingMain} setMainData={setMainData} setErrorMain={setErrorMain} setLoadingMain={setLoadingMain} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />,
        },
        {
            path: '/techy-blog/log-in',
            element: <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} setToken={setToken} />
        },
        {
            path: '/techy-blog/sign-up',
            element: <SignUp />
        },

        //This is Members / Admins Page
        {
            path: '/techy-blog/:id',
            element: <App mainData={mainData} errorMain={errorMain} loadingMain={loadingMain} setMainData={setMainData} setErrorMain={setErrorMain} setLoadingMain={setLoadingMain} loginStatus={loginStatus} setLoginStatus={setLoginStatus} setBlogPost={setBlogPost} setToken={setToken} token={token} />,
        },
        {
            path: '/techy-blog/:id/write-post',
            element: <WritePost mainData={mainData} token={token} />,
        },
        {
            path: '/techy-blog/:id/update-post/:postId',
            element: <UpdatePost mainData={mainData} blogPost={blogPost} token={token} />,
        },
        {
            path: '/techy-blog/:id/delete-post/:postId',
            element: <DeletePost blogPost={blogPost} token={token} />,
        },

    ])

    return <RouterProvider router={router} />
}


export default Router;