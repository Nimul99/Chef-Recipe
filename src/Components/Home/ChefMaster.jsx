import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ChefMaster = ({ chef }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, image, experian, like } = chef;

  return (
    <>
      <div className="bg-gray-100 p-6 rounded shadow-lg">
        <img
          className="object-cover w-full  rounded shadow-lg mb-6 "
          src={image}
          alt=""
        />

        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </p>
        <p className="text-gray-700 ">Experince: {experian}</p>
        <p className="text-gray-700 font-bold">like: {like}</p>
        <Link
          to={`/chef/${id}`}
          className="btn-primary w-full block text-center"
        >
          View Recipes
        </Link>
      </div>
    </>
  );
};

export default ChefMaster;
