import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

// PAGES

// LAYOUT
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Article />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
