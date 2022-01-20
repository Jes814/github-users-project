import React, { FC, useState } from "react";
import Search from "./module/search/Search";
import UserInfo from "./module/user/UserInfo";

export interface UserDetails {
  userName: string;
  id: number;
  url: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  followers_url: string;
  following_url: string;
  organizations_url: string;
}

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserDetails | undefined>();

  const getUser = (username: string) => {
    console.log("username", username);
    setIsLoading(true);
    return fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        return response;
      });
  };

  const handleSearchName = async (e: any) => {
    console.log(e.target.value);
    e.preventDefault();
    let fetchUser = await getUser(e.target.value);
    setUserData({
      userName: fetchUser.login,
      id: fetchUser.id,
      url: fetchUser.url,
      avatar_url: fetchUser.avatar_url,
      bio: fetchUser.bio,
      followers: fetchUser.followers,
      following: fetchUser.following,
      followers_url: fetchUser.followers_url,
      following_url: fetchUser.following_url,
      organizations_url: fetchUser.organizations_url,
    });
  };

  return (
    <div>
      <Search handleSearchName={handleSearchName} />
      <UserInfo userData={userData} isLoading={isLoading} />
    </div>
  );
};

export default App;
