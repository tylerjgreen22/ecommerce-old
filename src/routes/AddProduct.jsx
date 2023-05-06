import Header from "../components/Header";

const AddProduct = () => {
  //on submit, makes post call to api to add a product
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  //renders a form that allows users to enter in product info and then submit the procucts. alert pops up on product add.
  return (
    <div className="container">
      <Header />
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col mt-3">
            <textarea className="form-control" placeholder="description" />
          </div>
          <div className="col mt-3">
            <input type="number" className="form-control" placeholder="price" />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary mt-3"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
