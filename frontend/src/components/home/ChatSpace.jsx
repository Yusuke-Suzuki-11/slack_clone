import React from "react";

export const ChatSpace = () => {
  return (
    <>
      <div>
        <div className="flex">
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
            <div className="fixed w-full h-full bg-green-50">
              {/* コメントスペース */}
              <div className="flex flex-col justify-end w-full h-full overflow-scroll ">
                {/* //TODOコメントをループさせる */}
                <div className="px-4">
                  <p>fdsafa</p>
                  <p>fdsafa</p>
                  <p>fdsafa</p>
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
