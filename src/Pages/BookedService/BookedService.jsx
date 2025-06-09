import React from "react";

const BookedService = () => {
  return (
    <div className="max-w-4xl mx-auto">
      The page will contain the services from the booking collection which user
      have booked/purchased. You have to show this on this page. It means that
      show all the booked services from the booking collection where current
      userEmail is equal to UserEmail in each document. If there is no service,
      show a relevant message.
    </div>
  );
};

export default BookedService;
