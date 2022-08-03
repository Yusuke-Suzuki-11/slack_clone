import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown, } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faHashtag} from '@fortawesome/free-solid-svg-icons';

let targetDom;
let startOffsetX;
let endOffsetY;
let targetWidth;

export const SideBar = () => {
    const [showAddGroupPopUp, setShowAddGroupPopUp] = React.useState(false);
    const [showAddMemberPopUp, setShowAddMemberPopUp] = React.useState(false);

    React.useEffect(() => {
        targetDom = document.getElementById('js-add-group');
        startOffsetX = targetDom.getBoundingClientRect().left;
        endOffsetY = targetDom.getBoundingClientRect().bottom;
        targetWidth = targetDom.clientWidth;
    });

    const pushAddGroupPopUp = (event) => {
        console.log(targetDom.getBoundingClientRect().left);
        startOffsetX = targetDom.getBoundingClientRect().left;
        endOffsetY = targetDom.getBoundingClientRect().bottom;
        targetWidth = targetDom.clientWidth;
        setShowAddGroupPopUp(true);
    }

    const popAddGroupPopUp = (event) => {
        if (event.target !== event.currentTarget) return;
        setShowAddGroupPopUp(false);
    }

    var addGroupPopUp = (
        <>
            <div className="fixed h-full w-full z-20" onClick={(e) => { popAddGroupPopUp(e) }}>
                <div className='text-sm fixed w-20 py-3 px-2  z-30 bg-white rounded' style={{ top: endOffsetY, left: startOffsetX, width: targetWidth }}>
                    <p className=' text-red-600 '>※まだダミーだよ！</p>
                    <p>新しいチャンネルを作成する</p>
                    <p>チャンネル一覧</p>
                </div>
            </div>
        </>
    );
    
    var addMemberPopUp = (
        <>
            <div className="fixed h-full w-full z-20" onClick={(e) => { popAddGroupPopUp(e) }}>
                <div className='text-sm fixed w-20 py-3 px-2  z-30 bg-white rounded' style={{ top: endOffsetY, left: startOffsetX, width: targetWidth }}>
                    <p className=' text-red-600 '>※まだダミーだよ！</p>
                    <p>チーム</p>
                    <p>チャンネル一覧</p>
                </div>
            </div>
        </>
    );

    return (
        <>
            {showAddGroupPopUp && addGroupPopUp}
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
                    <div className='w-full h-full text-tx-white'>
                        {/*// !組織名 */}
                        <div className="flex h-12 w-full justify-center items-center px-5" style={{ borderBottom: "1px solid  #c2c2c2ad" }}>
                            <div className="w-full py-3 ">
                                <p className=" font-bold text-lg text-white">01Booster</p>
                            </div>
                            <div className=" py-1 h-full">
                                <div className=' h-full aspect-square bg-white rounded-full'>
                                </div>
                            </div>
                        </div>
                        {/*// !コメント */}
                        <div className="w-full">
                            <div className=" flex items-center px-4 py-1">
                                <div className=" mr-3 text-sm w-5">
                                    <FontAwesomeIcon icon={faCaretSquareDown} />
                                </div>
                                <div className=" text-base font-semibold" >
                                    チャンネル
                                </div>
                            </div>
                            <div className='w-full'>
                                {/* //TODO::アカウントのループ */}
                                <button className=" flex items-center px-4 py-1  hover:bg-opacity-black w-full">
                                    <div className=" mr-3 w-5 ">
                                        <FontAwesomeIcon icon={faHashtag} className="text-xs" />
                                    </div>
                                    <div className=" text-sm font-semibold" >
                                        03_開発
                                    </div>
                                </button>
                            </div>
                            {/* //!チャンネル追加 */}
                            <button
                                id='js-add-group'
                                className='w-full hover:bg-opacity-black'
                                onClick={(e) => { pushAddGroupPopUp(e) }}
                            >
                                <div className=" flex items-center px-4 py-1">
                                    <div className="mr-3 w-5 aspect-square rounded-sm text-center flex justify-center items-center " style={{ backgroundColor: '#ffffff36' }}  >
                                        <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                    </div>
                                    <div className=" text-sm font-semibold" >
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
                                id='js-add-group'
                                className='w-full hover:bg-opacity-black'
                                onClick={(e) => { pushAddGroupPopUp(e) }}
                            >
                                <div className=" flex items-center px-4 py-2">
                                    <div className="mr-3 w-5 aspect-square rounded-sm text-center flex justify-center items-center " style={{ backgroundColor: '#ffffff36' }}  >
                                        <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                    </div>
                                    <div className="text-sm font-semibold overflow-ellipsis  whitespace-nowrap " >
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
}