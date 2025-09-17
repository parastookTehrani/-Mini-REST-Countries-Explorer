import { Outlet } from "react-router";
import { Navbar } from "./components/shared/navbar";

export function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
