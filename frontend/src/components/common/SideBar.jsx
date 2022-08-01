import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';

export const SideBar = () => {
    return (
        <>
            <div className="fixed w-72 h-full bg-purple-900">
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
                                <div className=" flex items-center px-4 py-2  ">
                                    <div className=" mr-3 w-5  aspect-square bg-white rounded-sm  ">
                                    </div>
                                    <div className=" text-sm font-semibold" >
                                        鈴木佑輔
                                    </div>
                                </div>
                                <div className=" flex items-center px-4 py-2  ">
                                    <div className=" mr-3 w-5  aspect-square bg-white rounded-sm  ">
                                    </div>
                                    <div className=" text-sm font-semibold" >
                                        鈴木佑輔
                                    </div>
                                </div>
                                <div className=" flex items-center px-4 py-2  ">
                                    <div className=" mr-3 w-5  aspect-square bg-white rounded-sm  ">
                                    </div>
                                    <div className=" text-sm font-semibold" >
                                        鈴木佑輔
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}