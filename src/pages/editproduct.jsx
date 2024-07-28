import React from "react";
import { request } from "../config/request";
import { useParams, Link, useNavigate } from "react-router-dom";

export const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({ Product: "" });
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    if (id !== "new") {
      request.get(`/messages/${id}`).then((res) => {
        setProduct(res.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSave = () => {
    if (id === "new") {
      request.post(`/messages`, product).then(() => {
        setIsSaved(true);
      });
    } else {
      request.put(`/messages/${id}`, product).then(() => {
        setIsSaved(true);
      });
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-white max-w-[600px] text-center py-[90px] mt-[100px] mx-auto rounded-[40px]">
      <h1 className="text-3xl mb-[60px]">{id === "new" ? "Add Product" : "Edit Product"}</h1>
      <div className="mb-[30px]">
        <span className="mr-[10px] text-[20px]">Product Name:</span>
        <input 
          type="text"
          name="Product"
          value={product.Product || ""}
          onChange={handleChange}
          className="border-[5px] border-green-500 rounded-lg px-2 py-1"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-2 py-1 rounded mt-2"
      >
        Save
      </button>
      {isSaved && (
        <button
          onClick={handleBack}
          className="bg-blue-500 text-white px-2 py-1 rounded mt-2 ml-2"
        >
          Back to Category
        </button>
      )}
    </div>
  );
};
