import React from "react";
import { HomeContext, Home } from "../../components/Home";
import { useContext } from "react";

export const ChatSpace = () => {
  const props = useContext(HomeContext);

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
            <div className="fixed w-full h-full overflow-scroll bg-green-50">
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
                        <div className="px-4 text-sm border-t border-gray-300 ">
                          <div className="flex items-start justify-start py-4 ">
                            {/* アイコン部分 */}
                            <div className="mr-3 ">
                              <div className="w-10 bg-green-300 rounded-md aspect-square"></div>
                            </div>

                            {/* チャット部分 */}
                            <div className=" border-opacity-black">
                              <div className="flex items-end justify-star">
                                <p className="mr-2 font-bold ">
                                  {props.directMessageToUser.name}
                                </p>
                                <p className="text-xs font-light text-gray-500">
                                  {date}
                                </p>
                              </div>
                              <div className="mt-2"></div>
                              <p className="font-normal">
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
                    <textarea
                      className="w-full rounded-lg h-44 mb-7"
                      style={{ border: "1px solid  #c2c2c2ad" }}
                    ></textarea>
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
