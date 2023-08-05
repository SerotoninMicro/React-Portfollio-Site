import './index.css'

const Navbar = () => {
  return (
    <div className="navBar">
    <button className="navBtn">
    <h2>Portfollio</h2>
    </button>
    <button className="navBtnLinks">
    <h2>Links</h2>
    </button>
    <button className="navBtnAbout">
    <h2>About this site</h2>
    </button>
    </div>
  )
}

function App() {
  return (
  <>
  <Navbar/>
  </>
  )
}
export default App
