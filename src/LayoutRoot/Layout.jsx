import { Outlet } from "react-router-dom";
import BottomNav from '../Components/BottomNav/BottomNav'

const Layout = () => {
    return (
        <>
        <Outlet />
        <BottomNav />
        </>
    )
}

export default Layout