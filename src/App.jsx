import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { fetchMainData } from '../utils'
import { useEffect } from 'react'

const App = ({mainData, errorMain, loadingMain, setMainData, setErrorMain, setLoadingMain, loginStatus, setLoginStatus, setBlogPost, setToken, token}) => {

    useEffect(() => {
        setLoadingMain(true);
        setMainData({});
        setErrorMain(null);
        setLoginStatus('');
    },[])

    fetchMainData(setMainData, setErrorMain, setLoadingMain);
    if (loadingMain) return <p>Loading... Please wait</p>
    //if (errorMain) return <p>A network error was encountered</p>

    return (
      <div className='min-h-screen h-full w-full flex flex-col justify-between items-center'>
        <Header mainData={mainData} loginStatus={loginStatus} setLoginStatus={setLoginStatus} setToken={setToken} />
        <Blog mainData={mainData} setBlogPost={setBlogPost} token={token} />
        <Footer />
      </div>
    )
}

export default App