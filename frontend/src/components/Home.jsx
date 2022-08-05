import { Header } from "./common/Header";
import { SideBar } from "./common/SideBar";
import { ChatSpace } from "./home/ChatSpace";
import { createContext, useState } from "react";

export const HomeContext = createContext();
export const Home = () => {
  const [directMessageObjectsArray, setDirectMessageObjectsArray] = useState(
    []
  );
  const [directMessageToUser, setDirectMessageToUser] = useState();
  return (
    <>
      <div className="h-full">
        <Header />
        <HomeContext.Provider value={{}}>
          <SideBar />
          <ChatSpace />
        </HomeContext.Provider>
      </div>
    </>
  );
};
