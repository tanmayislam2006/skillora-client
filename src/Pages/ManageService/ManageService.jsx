import React from "react";

const ManageService = () => {
  return (
    <div className="max-w-4xl mx-auto">
      This page will be a private route. If a user log in, they will access the
      Manage Service page, This page will show all the services they have added
      from the Add Service page. Each card will have an Edit and Delete button.
      Update Action - If they click the edit button, they can update the service
      information Note: You can show the update form in a modal or another
      route. Delete Action - If they click the delete button, the service will
      be removed. Before the delete, ask for a delete confirmation. Note: If a
      user logs in, they will only see the services they have added. The user
      cannot see the services other users added.
    </div>
  );
};

export default ManageService;
