import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faHashtag, faXmark } from "@fortawesome/free-solid-svg-icons";
import { userInvite } from "../../apis/users";

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

  // DOM用意
  var addGroupPopUp = (
    <>
      <div
        className="fixed h-full w-full z-20"
        onClick={(e) => {
          popAddGroupPopUp(e);
        }}
      >
        <div
          className="text-sm fixed w-20 py-3 px-2  z-30 bg-white rounded"
          style={{ top: endOffsetY, left: startOffsetX, width: targetWidth }}
        >
          <p className=" text-red-600 ">※まだダミーだよ！</p>
          <p>新しいチャンネルを作成する</p>
          <p>チャンネル一覧</p>
        </div>
      </div>
    </>
  );
  var addMemberPopUp = (
    <>
      <div
        className="fixed h-full w-full z-20 flex bg-opacity-st-black"
        onClick={(e) => {
          popAddMemberPopUp(e);
        }}
      >
        <div className="p-6 w-4/12 bg-white rounded-md m-auto justify-center ">
          <div className="flex items-center justify-between  ">
            <p className=" text-2xl font-bold   ">
              01Boosterにメンバーを招待する
            </p>
            <button
              className="  p-2 rounded-md  h-10 aspect-square hover:bg-opacity-black flex items-center justify-center"
              onClick={(e) => {
                setShowAddMemberPopUp(false);
              }}
            >
              <FontAwesomeIcon className=" text-xl  " icon={faXmark} />
            </button>
          </div>
          <div className=" h-5"></div>
          <p className=" font-semibold text-xl">送信先：</p>
          <div className=" h-3"></div>
          <textarea
            name="inviteEmail"
            onChange={(e) => {
              handleInviteEmail(e);
            }}
            placeholder="mr.suzuki.11@gmail.com"
            className="border w-full h-20 border-gray-300 rounded-md p-2"
          ></textarea>
          <div className=" h-2"></div>
          <button
            onClick={() => {
              inviteUser();
            }}
            className="bg-gray-200 py-2 px-8 rounded-md ml-auto block font-bold"
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

      <div className="fixed w-72 h-full z-10 bg-theme-color   ">
        <div
          className="flex h-full border-r-2 w-full"
          style={{ borderRight: "1px solid  #c2c2c2ad" }}
        >
          {/*// !左側（組織） */}
          <div
            className="w-20 h-full block"
            style={{ borderRight: "1px solid  #c2c2c2ad" }}
          >
            <div className=" w-full flex justify-center ">
              <div className="px-4 w-full  ">
                <div className=" my-2 aspect-square w-full bg-white  rounded-md ">
                  A
                </div>
              </div>
            </div>
          </div>

          {/*// !右側(メンバー) */}
          <div className="h-full text-tx-white w-full">
            {/*// !組織名 */}
            <div
              className="flex h-12 w-full justify-center items-center px-5"
              style={{ borderBottom: "1px solid  #c2c2c2ad" }}
            >
              <div className="w-full py-3 ">
                <p className=" font-bold text-lg text-white">01Booster</p>
              </div>
              <div className=" py-1 h-full">
                <div className=" h-full aspect-square bg-white rounded-full"></div>
              </div>
            </div>
            {/*// !コメント */}
            <div className="w-full">
              <div className=" flex items-center px-4 py-1">
                <div className=" mr-3 text-sm w-5">
                  <FontAwesomeIcon icon={faCaretSquareDown} />
                </div>
                <div className=" text-base font-semibold">チャンネル</div>
              </div>
              <div className="w-full">
                {/* //TODO::アカウントのループ */}
                <button className=" flex items-center px-4 py-1 hover:bg-opacity-black w-full">
                  <div className=" mr-3 w-5 ">
                    <FontAwesomeIcon icon={faHashtag} className="text-xs" />
                  </div>
                  <div className=" text-sm font-semibold">03_開発</div>
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
                <div className=" flex items-center px-4 py-1">
                  <div
                    className="mr-3 w-5 aspect-square rounded-sm text-center flex justify-center items-center "
                    style={{ backgroundColor: "#ffffff36" }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                  </div>
                  <div className=" text-sm font-semibold">
                    チャンネルを追加する
                  </div>
                </div>
              </button>
            </div>
            <div className="w-full mt-5 ">
              <div className=" flex items-center px-4 py-1">
                <div className=" mr-3 text-sm w-5">
                  <FontAwesomeIcon icon={faCaretSquareDown} />
                </div>
                <div className=" text-base font-semibold">
                  ダイレクトメッセージ
                </div>
              </div>
              <div className="w-full">
                {/* //TODO::アカウントのループ */}
                {userObjectsArray.map((item) => {
                  return (
                    <div key={item.id}>
                      <button className=" flex items-center px-4 py-2  hover:bg-opacity-black w-full">
                        <div className=" mr-3 w-5  aspect-square bg-white rounded-sm  "></div>
                        <div className=" text-sm font-semibold">
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
                <div className=" flex items-center px-4 py-2">
                  <div
                    className="mr-3 w-5 aspect-square rounded-sm text-center flex justify-center items-center "
                    style={{ backgroundColor: "#ffffff36" }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                  </div>
                  <div className="text-sm font-semibold overflow-ellipsis  whitespace-nowrap ">
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
