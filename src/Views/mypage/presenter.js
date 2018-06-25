import React from "react";

import MyPage from "components/MyPage/presenter";
import MyMenuList from "components/MyMenuList/presenter";

const MyPageView = props => {
  return (
    <React.Fragment>
      <MyPage />
      <MyMenuList />
    </React.Fragment>
  );
};

export default MyPageView;
