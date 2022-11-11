import { Button, Checkbox, Label, Modal, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({ review, handleDelete }) => {
  const { message, title, rating, _id } = review;
  const [modalShow, setModalShow] = useState(false);
  const handleReviewUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const rating = form.rating.value;
    console.log(message, rating)
  }
  const handleModal = () =>{
    setModalShow(true)
  }
  const handleModalClose = () =>{
    setModalShow(false)
  }

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {title}
      </Table.Cell>
      <Table.Cell>{message}</Table.Cell>
      <Table.Cell>{rating}</Table.Cell>
      <Table.Cell>
        <React.Fragment>
          <Button onClick={handleModal}>Edit</Button>
          <Modal show={modalShow} size="md" popup={true} onClose={handleModalClose}>
            <Modal.Header />
            <Modal.Body>
              <form onSubmit={handleReviewUpdate} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Edit For {title}
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="review" value="Your review" />
                  </div>
                  <TextInput
                    id="review"
                    name="message"
                    defaultValue={message}
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="rating" value="Your rating" />
                  </div>
                  <TextInput id="rating" type="text" name="rating" required={true} defaultValue={rating} />
                </div>
                <div className="text-center" type='submit'>
                  <Button  className="text-center">Submit</Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </Table.Cell>
      <Table.Cell>
        <span
          onClick={() => handleDelete(_id)}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Delete
        </span>
      </Table.Cell>
    </Table.Row>
  );
};

export default ReviewRow;
