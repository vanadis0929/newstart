import React from "react";

import UserSearch from "components/UserSearch/presenter";
import UserList from "components/UserList/presenter";

const UserListView = props => {
  return (
    <React.Fragment>
      <UserSearch />
      <UserList />
    </React.Fragment>
  );
};

export default UserListView;
