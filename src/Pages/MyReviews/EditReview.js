import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {

    const review = useLoaderData();
    const {title, message, rating} = review[0];
    console.log(review)

    return (
        <div className='my-20'>
            <h2 className='text-xl font-bold text-center'>Edit For {title}</h2>
            <div className="flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="small"
                    value="Message"
                />
                </div>
                <TextInput
                id="small"
                defaultValue={message}
                type="text"
                sizing="sm"
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="base"
                    value="Rating"
                />
                </div>
                <TextInput
                id="base"
                type="text"
                sizing="md"
                defaultValue={rating}
                />
            </div>
            </div>
        </div>
    );
};

export default EditReview;