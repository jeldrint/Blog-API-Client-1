import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { fetchMainData } from './utils'
import { useEffect } from 'react'

const App = ({mainData, errorMain, loadingMain, setMainData, setErrorMain, setLoadingMain, loginStatus, setLoginStatus, setBlogPost }) => {

    useEffect(() => {
        setMainData({});
        setErrorMain(null);
        setLoadingMain(true);
        setLoginStatus('');
    },[])

    fetchMainData(setMainData, setErrorMain, setLoadingMain);
    if (loadingMain) return <p>Loading... Please wait</p>
    if (errorMain) return <p>A network error was encountered</p>

    return (
      <div className='h-full w-full flex flex-col justify-between items-center'>
        <Header mainData={mainData} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
        <Blog mainData={mainData} setBlogPost={setBlogPost} />
        <Footer />
      </div>
    )
}

export default App