import { Header } from "./common/Header"
import { SideBar } from "./common/SideBar"
import { ChatSpace } from "./home/ChatSpace"

export const Home = () => {
    return (
        <>
            <div className="h-full bg-red-200  ">
                <Header />
                <SideBar />

                <ChatSpace />

            </div>
        </>
    )
}