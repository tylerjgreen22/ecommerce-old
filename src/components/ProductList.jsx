import { useNavigate } from "react-router-dom";
import { products } from "../../data";
import imageone from "../assets/math-InK0X-GDjrQ-unsplash.jpg";

const ProductList = () => {
  const navigate = useNavigate();

  //on page load, makes a get call to the api to get all products

  //on click, sends users to product page for the specific product they clicked on
  const handleSelection = (id) => {
    navigate(`/${id}`);
  };

  //renders all products in card format
  return (
    <div className="container">
      <div className="row">
        {products &&
          products.map((product, idx) => {
            return (
              <div className="col-3 mt-3" key={idx}>
                <div
                  className="card text-bg-light border-dark"
                  onClick={() => handleSelection(product.id)}
                  role="button"
                >
                  <img
                    src={imageone}
                    alt={product.name}
                    className="card-img-top"
                  ></img>
                  <div className="card-body" style={{ height: 200 }}>
                    <h2 className="card-title">{product.name}</h2>
                    <div className="card-text">{product.description}</div>
                  </div>
                  <div className="card-footer">
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
