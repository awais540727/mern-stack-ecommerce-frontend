import React from "react";
import Layout from "../../components/layout/Layout";
import UserMenu from "../../components/layout/routes/UserMenu";

const Profile = () => {
  return (
    <Layout title={"manage profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <UserMenu />
          </div>
          <div className="col-lg-9 col-md-9">
            <h2>Profile</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
