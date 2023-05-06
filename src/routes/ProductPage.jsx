import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { products } from "../../data";
import imageone from "../assets/math-InK0X-GDjrQ-unsplash.jpg";

const ProductPage = () => {
  const { id } = useParams();
  const selectedProduct = products[id - 1];

  //renders a page that displays the selected product. displays buttons to add product to cart and update or delete the prodcuct if user is admin. allows users to add reviews for products
  return (
    <div className="container">
      <Header />
      <div className="row mt-5">
        <div className="col">
          <img
            src={imageone}
            alt={selectedProduct.name}
            className="img-thumbnail"
            style={{ height: 500 }}
          ></img>
        </div>
        <div className="col">
          <h1 className="display-2">{selectedProduct.name}</h1>
          <p>{selectedProduct.description}</p>
          <h2>${selectedProduct.price}</h2>
        </div>
      </div>
      <button className="btn btn-primary mt-3 me-3">Add to Cart</button>

      <button className="btn btn-warning mt-3 me-3">Update Product</button>

      <button className="btn btn-danger mt-3 me-3">Delete Product</button>

      <div className="col">
        <button className="btn btn-primary mt-3">Add Review</button>
      </div>
    </div>
  );
};

export default ProductPage;
