import './App.css'
import { Route, Routes } from 'react-router-dom'
import TopNavbar from './components/topNavbar/TopNavbar'
import Home from './components/home/Home'
import Success from './components/submit_form/Success'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/success"
          element={<Success />}
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
    </>
  )
}

export default App
