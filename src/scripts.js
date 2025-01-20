import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children:[
            {
              path:'/',
              element:<Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path:"/contact-us",
                element:<Contact/>
            }
        ]
    },
]);

rootElement.render(<RouterProvider router={appRouter} />);
