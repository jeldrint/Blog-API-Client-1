import { useEffect, useState } from 'react'
import './App.css'

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

const App = () => {

    return(
      <div className="h-screen w-screen flex flex-col items-center">
        <h1>Hello!</h1>
      </div>
  )
  }

export default App