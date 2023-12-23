import './App.css'
import About from './components/about/About'
import Blogs from './components/blog/Blogs'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Services from './components/services/Services'
import TopNavbar from './components/topNavbar/TopNavbar'

function App() {
  return (
    <>
      <TopNavbar />
      <Home />
      <About />
      <Services />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
