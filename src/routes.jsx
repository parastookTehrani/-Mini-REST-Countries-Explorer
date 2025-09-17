import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { Landing } from "./components/pages/landing";
import { Countries } from "./components/pages/countries";
import { About } from "./components/pages/about";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: 'countries',
                element: <Countries />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])