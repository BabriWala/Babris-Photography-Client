import React, {useContext} from "react";
import { Helmet } from "react-helmet";
import {AuthContext} from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const AddServices = () => {

  const notify = () => toast("Good Job Your Services Added!");

  const {user} = useContext(AuthContext);

  const handleAddService = event =>{
    event.preventDefault();
    const form = event.target;
    const photoURL = form.servicePhotoURL.value;
    const title = form.serviceTitle.value;
    const description = form.serviceDescription.value;
    const price = form.servicePrice.value;
    const rating = form.serviceRating.value;
    // console.log(photoURL, title, description, price, rating, user.email);
    form.reset();
    const service = {
      title: title, 
      img: photoURL, 
      price: price, 
      description: description,
      rating: rating,
      email: user.email
    }
   
    fetch('https://world-photography-server-babriwala.vercel.app/addService',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.acknowledged){
        notify();
      }
    })
    .catch(err => console.error(err))
  }


  return (
    <section className="p-6 w-full lg:w-3/4 mx-auto dark:bg-gray-800 dark:text-gray-50">
      <Helmet>
        <title>{`Babri's Photography - Add Services`}</title>
      </Helmet>
      <ToastContainer />
      <form onSubmit={handleAddService}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="servicePhotoURL" className="text-sm">
            Service Photo URL
          </label>
          <input required
            id="servicePhotoURL"
            name="servicePhotoURL"
            type="text"
            placeholder="Insert Service Photo URL"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
          <label htmlFor="serviceTitle" className="text-sm">
            Service Title
          </label>
          <input required
            id="serviceTitle"
            name="serviceTitle"
            type="text"
            placeholder="Insert Service Title"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
          <label htmlFor="serviceDescription" className="text-sm">
            Service Description
          </label>
          <input required
            id="serviceDescription"
            name="serviceDescription"
            type="text"
            placeholder="Insert Service Description"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
          <label htmlFor="servicePrice" className="text-sm">
            Service Price
          </label>
          <input required
            id="servicePrice"
            name="servicePrice"
            type="text"
            placeholder="Insert Service Price"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
          <label htmlFor="serviceRating" className="text-sm">
            Service Rating
          </label>
          <input required
            id="serviceRating"
            name="serviceRating"
            type="text"
            placeholder="Insert Service Rating"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
          <button
            type="submit"
            className="block w-full p-3 text-center bg-black text-white border-2 border-black hover:border-black hover:text-black hover:bg-transparent font-bold rounded-lg my-5 dark:text-gray-900 dark:bg-violet-400"
          >
            Add Service
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddServices;
