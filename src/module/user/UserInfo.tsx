import React, { FC } from "react";
import { UserDetails } from "../../App";
import Loader from "../loader/Loader";
import "./UserInfo.css";

const UserInfo: FC<{
  userData: UserDetails | undefined;
  isLoading: boolean;
}> = ({ userData, isLoading }) => {
  return (
    <>
      <div className="cardContainer">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="firstContainer">
              <div className="imageCOntainer">
                <img
                  className="image"
                  src={
                    userData?.avatar_url
                      ? userData?.avatar_url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq39FYyBUpx-nUtHV7LPN-H31ER5zzNMW6KycDj0jK9GUw_v-R9tMDiunchfmCZMDyev8&usqp=CAU"
                  }
                />
              </div>
              <div className="userMainDetailsContainer">
                <div className="userDetailsOneContainer">
                  <div className="userDetailsOne">
                    <h3>Id: </h3>
                    <p>{userData?.id ? userData.id : "No data fetched"}</p>
                  </div>
                  <div className="userDetailsTwo">
                    <h3>Bio: </h3>
                    <p>{userData?.bio ? userData.bio : "No data fetched"}</p>
                  </div>
                </div>
                <div className="userDetailsTwoContainer">
                  <div className="userDetailsOne">
                    <h3> Name:</h3>
                    <p>
                      {userData?.userName
                        ? userData?.userName
                        : "No data fetched"}
                    </p>
                  </div>
                  <div className="userDetailsTwo">
                    <h3> Github Profile Link: </h3>
                    <p>{userData?.url ? userData?.url : "No data fetched"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondContainer">
              <div className="secondDetailsContainerOne">
                <div className="secondUserDetails">
                  <h3>followers:</h3>
                  <p>
                    {userData?.followers
                      ? userData?.followers
                      : "No data fetched"}
                  </p>
                </div>
                <div className="secondUserDetails">
                  <h3>following:</h3>
                  <p>
                    {userData?.following
                      ? userData?.following
                      : "No data fetched"}
                  </p>
                </div>
                <div className="secondUserDetails">
                  <h3>followers_url:</h3>
                  <p>
                    {userData?.followers_url
                      ? userData?.followers_url
                      : "No data fetched"}
                  </p>
                </div>
              </div>
              <div className="secondDetailsContainerTwo">
                <div className="secondUserDetails">
                  <h3>following_url:</h3>
                  <p className="followingUrl">
                    {userData?.following_url
                      ? userData?.following_url
                      : "No data fetched"}
                  </p>
                </div>
                <div className="secondUserDetails">
                  <h3>organizations_url:</h3>
                  <p>
                    {userData?.organizations_url
                      ? userData?.organizations_url
                      : "No data fetched"}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserInfo;
