import React from "react";
import { HomeContext, Home } from "../../components/Home";
import { useContext } from "react";
import { apiSendMessage } from "../../apis/direct_messages";
import createConsumer from "actioncable"

export const ChatSpace = () => {
  const props = useContext(HomeContext);
  const [postMessage, setPostMessage] = React.useState("");

  const handlePostMessage = (event) => {
    setPostMessage(event.target.value);
  };

  return (
    <>
      <div>
        <div className="flex w-screen">
          <div className="w-72 shrink-0"></div>
          <div className="justify-between w-full">
            <div
              className="fixed block w-full h-12 bg-white"
              style={{ borderBottom: "1px solid  #c2c2c2ad" }}
            >
              <div className="flex items-center h-12 ml-4">
                <p className="font-bold">スレッド</p>
              </div>
            </div>
            <div className="h-12"></div>
            <div className="fixed w-full h-full overflow-scroll">
              {/* コメントスペース */}
              <div className="flex flex-col justify-end w-full h-full overflow-scroll ">
                {/* //TODOコメントをループさせる */}
                <div className="overflow-scroll ">
                  {props.directMessageObjectsArray.map((item) => {
                    let date = new Date(item.createdAt);
                    let day = date.getDate();
                    let year = date.getFullYear();
                    let month = date.getMonth();
                    let hours = date.getHours();
                    let minutes = date.getMinutes();

                    date = `${month}月${day}日 ${hours}:${minutes}`;
                    return (
                      <div key={item.id}>
                        <div className="px-4 text-sm border-t border-gray-200 ">
                          <div className="flex items-start justify-start py-5 ">
                            {/* アイコン部分 */}
                            <div className="mr-3 ">
                              <div className="w-10 bg-gray-300 border border-gray-300 rounded-md aspect-square">
                                <img src={item.userImageUrl} alt="" />
                              </div>
                            </div>
                            {/* チャット部分 */}
                            <div className=" border-opacity-black">
                              <div className="flex items-end justify-star">
                                <p className="mr-1 font-bold ">
                                  {item.userName ?? "No Name"}
                                </p>
                                <p className="text-xs font-light text-gray-500">
                                  {date}
                                </p>
                              </div>
                              <div className="mt-2"></div>
                              <p className="font-normal whitespace-pre-line">
                                {item.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mb-20 bg-white ">
                  <div className="w-full px-4">
                    <div
                      className="w-full p-4 rounded-lg h-44 mb-7"
                      style={{ border: "1px solid  #c2c2c2ad" }}
                    >
                      <textarea
                        name="postMessage"
                        id="post-message"
                        onChange={(e) => {
                          handlePostMessage(e);
                        }}
                        placeholder=".....メッセージを入力してください"
                        className="w-full p-4 border rounded-lg mb-7 "
                      ></textarea>
                      <button
                        onClick={() => {
                          let messagesArrayClone =
                            props.directMessageObjectsArray.concat();
                          apiSendMessage(
                            postMessage,
                            props.directMessageToUser.id
                          ).then((value) => {
                            messagesArrayClone.push(value.message);
                            props.setDirectMessageObjectsArray(
                              messagesArrayClone
                            );
                          });
                          document.getElementById("post-message").value = "";
                          setPostMessage("");
                        }}
                        className="px-4 py-1 rounded-md bg-slate-300"
                      >
                        送信
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
