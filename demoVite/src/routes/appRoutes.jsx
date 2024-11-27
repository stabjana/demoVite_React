import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import SinglePage from "../pages/SinglePage";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                { path: "/", element: <List /> },
                { path: "/:id", element: <SinglePage /> },
                { path: "/about", element: <About /> },
            ],
        },
    ],
    { /* Der Block { future: { ... } } aktiviert experimentelle oder zukünftige Features in React Router. Diese Features verbessern die Flexibilität, Leistung und Handhabung von Routen in deiner Anwendung. */
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);
