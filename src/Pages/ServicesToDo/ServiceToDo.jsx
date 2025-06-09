import React from "react";

const ServiceToDo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      The page will contain all the booked services information where the
      serviceProvider is you. That If there is no service, show a relevant
      message. You have to show the service status also. There will be a
      drop-down button for each booked service card. The dropdown will have some
      options. pending( default value ) working completed On changing the
      Dropdown from a specific booking service. It will update the service
      status of that service from the booking collection
    </div>
  );
};

export default ServiceToDo;
