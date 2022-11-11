import React, { useState, useEffect } from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homeServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="py-10">
      <h2 className="mb-5 text-4xl font-bold text-center">My Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}>
            {" "}
          </ServiceItem>
        ))}
      </div>
      <div className="text-center">
      <Link className="d-block  " to={"/services"}>
        <button
          type="button"
          className="d-block w-full mx-auto mt-10 text-white border-2 border-black hover:text-black hover:border-2 b order-black font-bold bg-black hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800"
        >
          See All
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Services;
