import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"

const Layout = () => {
  return (
    <div id="parentContainer" className="bg-gray-800 text-white w-full h-screen overflow-auto">
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout