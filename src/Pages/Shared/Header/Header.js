import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const {logOut, user} = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () =>{
      logOut()
    }

    const handleToggle = () =>{
        setIsClicked(!isClicked);
    }
  return (
      <nav className="bg-white px-2 lg:px-0 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={'/'} className="font-bold lg:text-xl">Babri's PhotoGraphy</Link>
          <div className="flex md:order-2">
            {
              user ? 
                 
              <button
              onClick={handleLogOut}
              type="button"
              className="text-black border-2 border-black hover:text-white hover:border-2 b order-black font-bold bg-transparent hover:bg-black outline-none focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 lg:px-5 lg:py-2.5 text-center mr-1 lg:mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800"
            >
              Log Out
            </button>
              : 
              <Link to={'/login'}><button
              type="button"
              className="text-black border-2 border-black hover:text-white hover:border-2 b order-black font-bold bg-transparent hover:bg-black outline-none focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 lg:px-5 lg:py-2.5 text-center mr-1 lg:mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800"
            >
              Log In
            </button></Link>


             
            }

            
           
            <button onClick={handleToggle}     
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={isClicked ?"justify-between items-center w-full md:flex md:w-auto md:order-1" : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1" }
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={'/'} className="block py-2 mb-2 md:border-none md:mb-0 lg:mb-0 pr-4 pl-3  font-bold  bg-transparent rounded md:bg-transparent md:text-black border-2 border-black text-black md:p-0 dark:text-white"
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/blog'} className="block py-2 mb-2 md:border-none md:mb-0 lg:mb-0 pr-4 pl-3  font-bold  bg-transparent rounded md:bg-transparent md:text-black border-2 border-black text-black md:p-0 dark:text-white"
                  aria-current="page">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={'/services'} className="block py-2 mb-2 md:border-none md:mb-0 lg:mb-0 pr-4 pl-3  font-bold  bg-transparent rounded md:bg-transparent md:text-black border-2 border-black text-black md:p-0 dark:text-white"
                  aria-current="page">
                  Services
                </Link>
              </li>
              {
                user && 
                <>
                <li>
                <Link to={'/addServices'} className="block py-2 mb-2 md:border-none md:mb-0 lg:mb-0 pr-4 pl-3  font-bold  bg-transparent rounded md:bg-transparent md:text-black border-2 border-black text-black md:p-0 dark:text-white"
                  aria-current="page">
                  Add Services
                </Link>
                </li>

                <li>
                <Link to={'/myReviews'} className="block py-2 mb-2 md:border-none md:mb-0 lg:mb-0 pr-4 pl-3  font-bold  bg-transparent rounded md:bg-transparent md:text-black border-2 border-black text-black md:p-0 dark:text-white"
                  aria-current="page">
                  My Reviews
                </Link>
              </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
