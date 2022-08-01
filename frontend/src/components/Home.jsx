import { Header } from "./common/Header"
import { SideBar } from "./common/SideBar"
import { ChatSpace } from "./home/ChatSpace"

export const Home = () => {
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