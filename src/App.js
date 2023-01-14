import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./LayoutRoot/Layout";
import Home from './Pages/Home/Home';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import SeriesPage from './Pages/SeriesPage/SeriesPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import Details from './Pages/Details/Details';


function App() {
  const routers = createBrowserRouter([
    {path: '/', element: <Layout />, children: [
      {path:'/', element: <Home />},
      {path:'movies', element: <MoviesPage />},
      {path:'series', element: <SeriesPage />},
      {path:'search', element: <SearchPage />},
      {path:'trendDetails/:media_type/:id', element: <Details />},
    ]}
  ])
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
