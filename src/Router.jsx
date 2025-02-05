import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Service.jsx";
import Project from "./Pages/Project/Project.jsx";
import WebsitePlans from "./Components/Prices/Price.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/works",
                element: <Project/>,
            },
            {
                path: "/prices",
                element: <WebsitePlans/>
            }
        ],
    },
]);
