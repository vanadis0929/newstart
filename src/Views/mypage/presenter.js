import React from "react";

import MyPage from "components/MyPage/";
import MyMenuList from "components/MyMenuList/";

const MyPageView = props => {
  return (
    <React.Fragment>
      <MyPage />
      <MyMenuList />
    </React.Fragment>
  );
};

export default MyPageView;
