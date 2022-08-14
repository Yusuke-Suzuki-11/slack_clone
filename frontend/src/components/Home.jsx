import { Header } from "./common/Header";
import { SideBar } from "./common/SideBar";
import { ChatSpace } from "./home/ChatSpace";
import { createContext, useState } from "react";
import { getDirectMessageAbleUsers } from "../apis/users";

export const HomeContext = createContext();
export const Home = () => {
  const [directMessageObjectsArray, setDirectMessageObjectsArray] = useState([]);
  const [directMessageUserArray, setDirectMessageUserArray] = useState([]);
  const [directMessageToUser, setDirectMessageToUser] = useState();
  
  getDirectMessageAbleUsers().then(value => console.log(value));
  
  return (
    <>
      <div className="h-full">
        <Header />
        <HomeContext.Provider
          value={{
            directMessageObjectsArray,
            setDirectMessageObjectsArray,
            directMessageToUser,
            setDirectMessageToUser,
            directMessageUserArray,
            setDirectMessageUserArray,
          }}
        >
          <SideBar />
          <ChatSpace />
        </HomeContext.Provider>
      </div>
    </>
  );
};