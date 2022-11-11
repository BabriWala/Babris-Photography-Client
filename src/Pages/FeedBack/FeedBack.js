import React, { useContext } from 'react';
import {AuthContext} from '../../AuthProvider/AuthProvider';
const FeedBack = ({id, title}) => {

    const {user} = useContext(AuthContext);

    const handleReview = event =>{
        event.preventDefault()
        const form = event.target;
        const message = form.message.value;
        const img = user.photoURL;
        const name = user.displayName;
        const rating = 5;
        const serviceId = id;
        // console.log(message, img, name, serviceId);
        const review = {
            message,
            img,
            title,
            name,
            serviceId,
            rating,
            date: new Date(),
            email: user.email

        }
        fetch('https://world-photography-server-babriwala.vercel.app/addReview',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }

    return (
        <div className="flex mx-auto flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
            </div>
            <form onSubmit={handleReview} className="flex flex-col w-full">
                <textarea rows="3" name="message" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                <button type="submit" className="py-4 my-8 font-semibold rounded-md bg-black text-white  border-2 border-black hover:bg-transparent hover:text-black dark:text-gray-900 dark:bg-violet-400">Leave Feedback</button>
            </form>
        </div>
    </div>
    );
};

export default FeedBack;