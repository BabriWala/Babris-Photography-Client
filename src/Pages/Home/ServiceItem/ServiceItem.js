import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceItem = ({ service }) => {
  const { title, img, price, rating, description, _id } = service;
  // console.log(service);
  
  return (
    <Card>
      <div>
        <PhotoProvider>
          <PhotoView src={img}>
        <img className="rounded-lg" src={img} alt={title} />

          </PhotoView>
        </PhotoProvider>
      </div>

      <div>
        <h5 className="text-2xl font-bold tracking-tight mb-5 text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 mb-5 dark:text-gray-400">
          {`${description.slice(0, 100)} ...`}
        </p>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Price: {price}</h2>
          <Link to={`/services/${_id}`}>
            <button type="button" className="text-black border-2 border-black hover:text-white hover:border-2 b order-black font-bold bg-transparent hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800">View Details</button >
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ServiceItem;
