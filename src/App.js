import './styles/index.css'
import { Navbar } from './components/navBar'
import { About } from './components/About'

export default function App() {
  return (
  <>
  <header className='bar'>
  <Navbar/>
  </header>
  <main className='main'>
  <About/>
  </main>
  <footer></footer>
  </>
  )
}