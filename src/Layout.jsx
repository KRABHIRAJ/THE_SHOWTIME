import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"

const Layout = () => {
  return (
    <div className="bg-gray-800 text-white h-screen">
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout