import { RouteList } from './routes/RouteList'; 
import { Header, Footer } from "./components"
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <Header />
      <RouteList />
      <Footer />
    </div>
  )
}

export default App
