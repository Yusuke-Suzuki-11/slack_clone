import { Header } from "./common/Header"
import { SideBar } from "./common/SideBar"
import { ChatSpace } from "./home/ChatSpace"
import { useState } from "react"


export const Home = () => {
    const [directMessageObjectsArray, setDirectMessageObjectsArray] = useState([]);
    const [directMessageToUser, setDirectMessageToUser] = useState();
    
    return (
        <>
            <div className="h-full">
                <Header />
                <SideBar />

                <ChatSpace />

            </div>
        </>
    )
}