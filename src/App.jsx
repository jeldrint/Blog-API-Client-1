import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { fetchMainData } from './utils'

const App = ({data, error, loading, setData, setError, setLoading}) => {

    fetchMainData(setData, setError, setLoading);
    if (loading) return <p>Loading... Please wait</p>
    if (error) return <p>A network error was encountered</p>

    return (
      <div className='h-full w-full flex flex-col justify-between items-center'>
        <Header data={data} />
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