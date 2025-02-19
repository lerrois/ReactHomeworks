import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute.jsx";
import Country from "./routes/Country.jsx";
import Layout from "./pages/Layout.jsx";
import Countries from "./routes/Countries.jsx";
import ErrorRoute from "./routes/Error Route.jsx";


function App() {

    const router = createBrowserRouter([
        {
            path: `/`,
            element: <Layout />,
            children: [
                {
                    path: `/`,
                    element: <HomeRoute />,
                },
                {
                    path: `countries`,
                    element: <Countries />,
                },
                {
                    path: `country/:id`,
                    element: <Country />
                },
            ],
            errorElement: <ErrorRoute />,
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App
