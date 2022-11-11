import React from "react";

const Contact = () => {
  return (
      <section className="py-6 mb-10 dark:bg-gray-800 dark:text-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          <form
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <h1 className="text-4xl font-bold text-center">Get in touch</h1>
            <p className=" pb-4 text-center">
              Fill in the form to start a conversation
            </p>
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded-lg w-full hover:bg-transparent hover:text-black bg-black text-white dark:text-gray-900 border-black border-2 font-bold full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
  );
};

export default Contact;
