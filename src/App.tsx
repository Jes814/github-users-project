import React, { FC, useState } from "react";
import Search from "./module/search/Search";
import UserInfo from "./module/user/UserInfo";
import Loader from "./module/loader/Loader";

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

interface UserNameQuery {
  target: {
    value: string;
  };
}

interface Submission {
  preventDefault: () => void;
}

const App: FC = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [userData, setUserData] = useState<UserDetails | undefined>();

  const getUser = (username: any) => {
    setIsLoading(true);
    return fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        return response;
      });
  };

  const handleSearchName = (e: UserNameQuery) => {
    setUser(e.target.value);
    if (e.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleSubmit = async (e: Submission) => {
    e.preventDefault();
    let fetchUser = await getUser(user);
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
      <Search
        handleSubmit={handleSubmit}
        handleSearchName={handleSearchName}
        user={user}
        isDisabled={isDisabled}
      />
      <UserInfo userData={userData} isLoading={isLoading} />
    </div>
  );
};

export default App;
