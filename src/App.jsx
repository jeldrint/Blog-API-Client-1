import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try{
            const data = await fetch('/techy-blog/api', {mode: "cors"});
            const response = await data.json();
            setData(response);
        }catch(error){
            console.log('error?')
            setError(error)
        }finally{
            console.log('finally?')
            setLoading(false);
        }
      }
      fetchData();
    },[])

    if (loading) return <p>Loading...</p>
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