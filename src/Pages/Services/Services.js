import React, {useContext} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceItem from '../Home/ServiceItem/ServiceItem';
import {Helmet} from "react-helmet";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Button, Spinner } from 'flowbite-react';
const Services = () => {

    const services = useLoaderData();
    // console.log(services)
    const {loading} = useContext(AuthContext)
    

    return (
        <div className='py-10'>
            <Helmet>
            <title>{`Babri's Photography - Services`}</title>
            </Helmet>
            <h2 className='mb-5 text-4xl font-bold text-center'>My Services</h2>
            {
                loading && 
                <Button className='d-block mx-auto'>
                <Spinner aria-label="Spinner button example" />
                <span className="pl-3">
                Loading...
                </span>
                </Button>
            }
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <ServiceItem
                key={service._id}
                service={service}
                > </ServiceItem>)
            }
            </div>
        </div>
    );
};

export default Services;