import App from './App'
import { Navigate } from 'react-router-dom';
import Login from './components/Log-in'

const routes = [
    {
        path: '/',
        element: <Navigate to='/techy-blog' />,
    },
    {
        path: '/techy-blog',
        element: <App />,
    },
    {
        path: '/techy-blog/log-in',
        element: <Login />
    }
]

export default routes;