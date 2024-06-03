import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { fetchMainData } from './utils'
import { useEffect } from 'react'

const App = ({data, error, loading, setData, setError, setLoading, loginStatus, setLoginStatus}) => {

    useEffect(() => {
        setData(null);
        setError(null);
        setLoading(true);
        setLoginStatus('');
    },[])

    fetchMainData(setData, setError, setLoading);
    if (loading) return <p>Loading... Please wait</p>
    if (error) return <p>A network error was encountered</p>

    return (
      <div className='h-full w-full flex flex-col justify-between items-center'>
        <Header data={data} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
        <Blog data={data} />
        <Footer />
      </div>
    )
}

export default App