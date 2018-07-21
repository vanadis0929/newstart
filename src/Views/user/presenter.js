import React, { Fragment } from "react";

import UserSearch from "components/UserSearch/presenter";
import UserList from "components/UserList/presenter";

const UserListView = props => {
  return (
    <Fragment>
      <UserSearch />
      <UserList />
    </Fragment>
  );
};

export default UserListView;
