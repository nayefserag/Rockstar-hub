import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { GameDetails } from "./pages/GameDetails";

const routes =createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "game/:id", element: <GameDetails /> },
        ],
        
    }
])
export default routes