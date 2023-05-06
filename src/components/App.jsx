import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../routes/Home";
import AddProduct from "../routes/AddProduct";
import ProductPage from "../routes/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" exact element={<Home />} />
      <Route path="/:id" exact element={<ProductPage />} />
      <Route path="/addProduct" exact element={<AddProduct />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
