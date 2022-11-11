import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home';
import Blog from '../../Pages/Blog/Blog';
import Services from '../../Pages/Services/Services';
import Login from '../../Pages/Login/Login';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Register from '../../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddServices from '../../Pages/AddServices/AddServices';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import EditReview from '../../Pages/MyReviews/EditReview';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myReviews/edit/:id',
                element: <EditReview></EditReview>,
                loader: ({params}) => fetch(`http://localhost:5000/review/edit/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);