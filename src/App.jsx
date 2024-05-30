import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { fetchPublicPage } from './utils'

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    fetchPublicPage(setData, setError, setLoading);
    if (loading) return <p>Loading... Please wait</p>
    if (error) return <p>A network error was encountered</p>

    return (
      <div className='h-full w-full flex flex-col justify-between items-center'>
        <Header />
        <Blog data={data} />
        <Footer />
      </div>
    )
}

export default App



/* function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        const data = await fetch('/techy-blog/api');
        const response = await data.json();
        setData(response.user)
    }
    fetchData();
  },[])

  return (
    <>
      <p>{!data ? "Loading..." : data.first_name}</p>
    </>
  )
} */