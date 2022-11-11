import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { Table } from "flowbite-react";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`, {
      // headers:{
      //     authorization: `Bearer ${localStorage.getItem('photographyToken')}`
      // }
    })
      // .then(res=> {
      //     res.json()
      //     // if (res.status === 200) {
      //     //     return res.json();

      //     // }
      //     // logOut();
      // })
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  console.log(myReviews);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete this review', id);
    if (proceed) {
        fetch(`http://localhost:5000/myReviews/${id}`, {
            method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remaining = myReviews.filter(rvw => rvw._id !== id);
            setMyReviews(remaining);
        }
    })
    }
}


const handleReviewUpdate = (id, editMessage, editRating) => {
  fetch(`http://localhost:5000/review/edit/${id}`, {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify({ message: editMessage, rating: editRating })
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              const remaining = myReviews.filter(rvw => rvw._id !== id);
              const approving = myReviews.find(rvw => rvw._id === id);
              approving.message = {editMessage}
              approving.rating = {editRating}

              const myReviews = [approving, ...remaining];
              setMyReviews(myReviews);
          }
      })
}


  return (
    <div  className="my-20">
      <Helmet>
        <title>{`Babri's Photography - My Reviews`}</title>
      </Helmet>
      {myReviews.length < 0 ? (
        <h2>No Reviews To Show</h2>
      ) : (
        <>
        <h2 className="text-2xl font-bold text-center mb-5">My Reviews</h2>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell>Service Name</Table.HeadCell>
              <Table.HeadCell>Review Message</Table.HeadCell>
              <Table.HeadCell>Rating</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Delete</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {
                myReviews.map(review => <ReviewRow key={review._id} review={review} handleDelete={handleDelete} handleReviewUpdate={handleReviewUpdate}></ReviewRow>)
              }
            </Table.Body>
          </Table>
        </>
      )}
    </div>
  );
};

export default MyReviews;
