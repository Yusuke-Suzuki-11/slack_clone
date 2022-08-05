import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faHashtag, faXmark } from "@fortawesome/free-solid-svg-icons";
import { userInvite } from "../../apis/users";
import { getMessageByUserId } from "../../apis/direct_messages";
import { HomeContext } from "../Home";

let targetDom;
let startOffsetX;
let endOffsetY;
let targetWidth;

export const SideBar = () => {
  const [showAddGroupPopUp, setShowAddGroupPopUp] = React.useState(false);
  const [showAddMemberPopUp, setShowAddMemberPopUp] = React.useState(false);
  const [inviteUserEmail, setInviteUserEmail] = React.useState("");
  const [userObjectsArray, setUserObjectsArray] = React.useState([]);

  React.useEffect(() => {
    targetDom = document.getElementById("js-add-group");
    startOffsetX = targetDom.getBoundingClientRect().left;
    endOffsetY = targetDom.getBoundingClientRect().bottom;
    targetWidth = targetDom.clientWidth;
  });

  // ポップアップ出す系
  const pushAddGroupPopUp = (event) => {
    console.log(targetDom.getBoundingClientRect().left);
    startOffsetX = targetDom.getBoundingClientRect().left;
    endOffsetY = targetDom.getBoundingClientRect().bottom;
    targetWidth = targetDom.clientWidth;
    setShowAddGroupPopUp(true);
  };
  const pushAddMemberPopUp = () => {
    setShowAddMemberPopUp(true);
  };

  // ポップアップ消す系
  const popAddGroupPopUp = (event) => {
    if (event.target !== event.currentTarget) return;
    setShowAddGroupPopUp(false);
  };
  const popAddMemberPopUp = (event) => {
    if (event.target !== event.currentTarget) return;
    setShowAddMemberPopUp(false);
  };

  const handleInviteEmail = (event) => {
    setInviteUserEmail(event.target.value);
  };

  const inviteUser = async () => {
    userInvite({ inviteEmail: inviteUserEmail })
      .then((response) => {
        if (!response.success) return;
        let userObject = response.message;
        setUserObjectsArray([userObject]);
      })
      .catch((e) => {
        console.log(e);
      });
    setShowAddMemberPopUp(false);
  };

  const getMessage = async (userId) => {
    getMessageByUserId({ userId })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // DOM用意
  var addGroupPopUp = (
    <>
      <div
        className="fixed z-20 w-full h-full"
        onClick={(e) => {
          popAddGroupPopUp(e);
        }}
      >
        <div
          className="fixed z-30 w-20 px-2 py-3 text-sm bg-white rounded"
          style={{ top: endOffsetY, left: startOffsetX, width: targetWidth }}
        >
          <p className="text-red-600 ">※まだダミーだよ！</p>
          <p>新しいチャンネルを作成する</p>
          <p>チャンネル一覧</p>
        </div>
      </div>
    </>
  );
  var addMemberPopUp = (
    <>
      <div
        className="fixed z-20 flex w-full h-full bg-opacity-st-black"
        onClick={(e) => {
          popAddMemberPopUp(e);
        }}
      >
        <div className="justify-center w-4/12 p-6 m-auto bg-white rounded-md ">
          <div className="flex items-center justify-between ">
            <p className="text-2xl font-bold ">01Boosterにメンバーを招待する</p>
            <button
              className="flex items-center justify-center h-10 p-2 rounded-md aspect-square hover:bg-opacity-black"
              onClick={(e) => {
                setShowAddMemberPopUp(false);
              }}
            >
              <FontAwesomeIcon className="text-xl " icon={faXmark} />
            </button>
          </div>
          <div className="h-5 "></div>
          <p className="text-xl font-semibold ">送信先：</p>
          <div className="h-3 "></div>
          <textarea
            name="inviteEmail"
            onChange={(e) => {
              handleInviteEmail(e);
            }}
            placeholder="mr.suzuki.11@gmail.com"
            className="w-full h-20 p-2 border border-gray-300 rounded-md"
          ></textarea>
          <div className="h-2 "></div>
          <button
            onClick={() => {
              inviteUser();
            }}
            className="block px-8 py-2 ml-auto font-bold bg-gray-200 rounded-md"
          >
            送信
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {showAddGroupPopUp && addGroupPopUp}
      {showAddMemberPopUp && addMemberPopUp}
      {/* ヘッダの分浮かせる */}
      <div className="h-11"></div>

      <div className="fixed z-10 h-full w-72 bg-theme-color ">
        <div
          className="flex w-full h-full border-r-2"
          style={{ borderRight: "1px solid  #c2c2c2ad" }}
        >
          {/*// !左側（組織） */}
          <div
            className="block w-20 h-full"
            style={{ borderRight: "1px solid  #c2c2c2ad" }}
          >
            <div className="flex justify-center w-full ">
              <div className="w-full px-4 ">
                <div className="w-full my-2 bg-white rounded-md aspect-square">
                  A
                </div>
              </div>
            </div>
          </div>

          {/*// !右側(メンバー) */}
          <div className="w-full h-full text-tx-white">
            {/*// !組織名 */}
            <div
              className="flex items-center justify-center w-full h-12 px-5"
              style={{ borderBottom: "1px solid  #c2c2c2ad" }}
            >
              <div className="w-full py-3 ">
                <p className="text-lg font-bold text-white ">01Booster</p>
              </div>
              <div className="h-full py-1 ">
                <div className="h-full bg-white rounded-full aspect-square"></div>
              </div>
            </div>
            {/*// !コメント */}
            <div className="w-full">
              <div className="flex items-center px-4 py-1 ">
                <div className="w-5 mr-3 text-sm ">
                  <FontAwesomeIcon icon={faCaretSquareDown} />
                </div>
                <div className="text-base font-semibold ">チャンネル</div>
              </div>
              <div className="w-full">
                {/* //TODO::アカウントのループ */}
                <button className="flex items-center w-full px-4 py-1 hover:bg-opacity-black">
                  <div className="w-5 mr-3 ">
                    <FontAwesomeIcon icon={faHashtag} className="text-xs" />
                  </div>
                  <div className="text-sm font-semibold ">03_開発</div>
                </button>
              </div>
              {/* //!チャンネル追加 */}
              <button
                id="js-add-group"
                className="w-full hover:bg-opacity-black"
                onClick={(e) => {
                  pushAddGroupPopUp(e);
                }}
              >
                <div className="flex items-center px-4 py-1 ">
                  <div
                    className="flex items-center justify-center w-5 mr-3 text-center rounded-sm aspect-square "
                    style={{ backgroundColor: "#ffffff36" }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                  </div>
                  <div className="text-sm font-semibold ">
                    チャンネルを追加する
                  </div>
                </div>
              </button>
            </div>
            <div className="w-full mt-5 ">
              <div className="flex items-center px-4 py-1 ">
                <div className="w-5 mr-3 text-sm ">
                  <FontAwesomeIcon icon={faCaretSquareDown} />
                </div>
                <div className="text-base font-semibold ">
                  ダイレクトメッセージ
                </div>
              </div>
              <div className="w-full">
                {/* //TODO::アカウントのループ */}
                {userObjectsArray.map((item) => {
                  return (
                    <div key={item.id}>
                      <button
                        className="flex items-center w-full px-4 py-2 hover:bg-opacity-black"
                        onClick={() => {
                          getMessage(item.id);
                        }}
                      >
                        <div className="w-5 mr-3 bg-white rounded-sm aspect-square"></div>
                        <div className="text-sm font-semibold ">
                          {item.name}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
              {/* //!チャンネル追加 */}
              <button
                id="js-add-group"
                className="w-full hover:bg-opacity-black"
                onClick={(e) => {
                  pushAddMemberPopUp(e);
                }}
              >
                <div className="flex items-center px-4 py-2 ">
                  <div
                    className="flex items-center justify-center w-5 mr-3 text-center rounded-sm aspect-square "
                    style={{ backgroundColor: "#ffffff36" }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                  </div>
                  <div className="text-sm font-semibold overflow-ellipsis whitespace-nowrap ">
                    チームメンバーを追加する
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
