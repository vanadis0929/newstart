import React, { Fragment } from "react";

import MyPage from "components/MyPage/";
import MyMenuList from "components/MyMenuList/";

const MyPageView = props => {
  return (
    <Fragment>
      <MyPage />
      <MyMenuList />
    </Fragment>
  );
};

export default MyPageView;
