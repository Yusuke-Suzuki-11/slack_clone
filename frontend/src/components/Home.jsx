import { Header } from "./common/Header"
import { SideBar } from "./common/SideBar"
import { ChatSpace } from "./home/ChatSpace"

export const Home = () => {
    return (
        <>
            <Header />
            <div className="h-11"></div>
            <div className="flex  bg-red-400">
                <SideBar />
                <ChatSpace />
            </div>
        </>
    )
}