import React from "react";
import { request } from "../config/request";
import { Link } from "react-router-dom";
import { HeaderLogo } from "../assets/header-logo";

export const Category = () => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    request.get("/messages").then((res) => {
      setState(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    request.delete(`/messages/${id}`).then(() => {
      setState((prevState) => prevState.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <div className="flex p-6 bg-[#373f68] text-center items-center justify-between rounded-xl">
        <HeaderLogo/>
        <p className="text-[#f2f4fe] font-normal text-[14px]">Sort by : <span className="font-bold text-[17px]">Most Upvotes</span></p>
      <Link to={`/edit-product/new`} className="bg-[#ad1fea] text-white px-6 py-3 inline-block rounded-xl">+ Add Feedback</Link>
      </div>
      {state.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-6 rounded-2xl bg-white mt-[15px]">
          <span className="text-[#3a4374] font-bold text-[18px]">{item.Product}</span>
          <div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded mr-2"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
            <Link
              to={`/edit-product/${item.id}`}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
