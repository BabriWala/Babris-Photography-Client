import { Card } from "flowbite-react";
import React, { useContext, useState, useEffect } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import FeedBack from "../FeedBack/FeedBack";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {Helmet} from "react-helmet";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
  const service = useLoaderData();
  const { title, img, _id, price, description } = service[0];

  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/review/${_id}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  },[_id])

  return (
    <>
      <div className="my-16">
      <Helmet>
            <title>{`Babri's Photography - ${title}`}</title>
            </Helmet>
        <Card horizontal={false}>
          <h5 className="text-5xl text-center mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="w-3/4 mx-auto rounded-lg" src={img} alt={title} />
            </PhotoView>
          </PhotoProvider>
          <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Price: {price} Only</h2>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {
          reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
        }
      </div>
      {
        user ? 
        <FeedBack id={_id} title={title}></FeedBack>
        :
        <h2 className="text-center my-10 font-bold text-xl">Please <Link className="italic underline text-blue-500" to={'/login'}>login</Link> to add a review.</h2>
      }
    </>
  );
};

export default ServiceDetails;
