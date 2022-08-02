import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown, } from '@fortawesome/free-regular-svg-icons';
import { faPlus, } from '@fortawesome/free-solid-svg-icons';

let targetDom;
let startOffsetX;
let endOffsetY;
let targetWidth;

export const SideBar = () => {
    const [showAddAccountPopUp, setShowAddAccountPopUp] = React.useState(false);

    React.useEffect(() => {
        targetDom = document.getElementById('js-add-account');
        startOffsetX = targetDom.getBoundingClientRect().left;
        endOffsetY = targetDom.getBoundingClientRect().bottom;
        targetWidth = targetDom.clientWidth;
    });

    const pushAddAccountPopUp = (event) => {
        console.log(targetDom.getBoundingClientRect().left);
        startOffsetX = targetDom.getBoundingClientRect().left;
        endOffsetY = targetDom.getBoundingClientRect().bottom;
        targetWidth = targetDom.clientWidth;
        setShowAddAccountPopUp(true);
    }

    const popAddAccountPopUp = (event) => {
        if (event.target !== event.currentTarget) return;
        setShowAddAccountPopUp(false);
    }

    var addAccountPopUp = (
        <>
            <div className="fixed h-full w-full z-20" onClick={(e) => { popAddAccountPopUp(e) }}>
                <div className='fixed w-20 py-1 px-1  z-30 bg-white rounded' style={{ top: endOffsetY, left: startOffsetX, width: targetWidth }}>
                    コメント
                </div>
            </div>
        </>
    );

    return (
        <>
            {showAddAccountPopUp && addAccountPopUp}
            <div className="fixed w-72 h-full bg-theme-color z-10">
                <div className="flex h-full border-r-2" style={{ borderRight: "1px solid  #c2c2c2ad" }}>
                    {/*// !左側（組織） */}
                    <div className="w-16 h-full block shrink-0" style={{ borderRight: "1px solid  #c2c2c2ad" }}>
                        <div className=" w-full flex justify-center ">
                            <div className="px-4 w-full  ">
                                <div className=" my-2 aspect-square w-full bg-white  rounded-md ">
                                    A
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*// !右側(メンバー) */}
                    <div className='w-full h-full text-white'>
                        {/*// !組織名 */}
                        <div className="flex h-12 w-full justify-center items-center px-5" style={{ borderBottom: "1px solid  #c2c2c2ad" }}>
                            <div className="w-full py-3 ">
                                <p className=" font-bold text-lg   ">01Booster</p>
                            </div>
                            <div className=" py-1 h-full">
                                <div className=' h-full aspect-square bg-white rounded-full'>
                                </div>
                            </div>
                        </div>
                        {/*// !コメント */}
                        <div className="w-full">
                            <div className=" flex items-center px-4 py-2">
                                <div className=" mr-3 text-sm w-5">
                                    <FontAwesomeIcon icon={faCaretSquareDown} />
                                </div>
                                <div className=" text-base font-semibold" >
                                    ダイレクトメッセージ
                                </div>
                            </div>
                            <div className='w-full'>
                                {/* //TODO::アカウントのループ */}
                                <button className=" flex items-center px-4 py-2  hover:bg-opacity-black w-full">
                                    <div className=" mr-3 w-5  aspect-square bg-white rounded-sm  ">
                                    </div>
                                    <div className=" text-sm font-semibold" >
                                        鈴木佑輔
                                    </div>
                                </button>
                            </div>
                            {/* //!チャンネル追加 */}
                            <button
                                id='js-add-account'
                                className='w-full hover:bg-opacity-black'
                                onClick={(e) => { pushAddAccountPopUp(e) }}
                            >
                                <div className=" flex items-center px-4 py-2">
                                    <div className="mr-3 w-5 aspect-square rounded-sm text-center flex justify-center items-center " style={{ backgroundColor: '#ffffff36' }}  >
                                        <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                    </div>
                                    <div className=" text-sm font-semibold" >
                                        チャンネルを追加する
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}