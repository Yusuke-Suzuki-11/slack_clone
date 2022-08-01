import React from 'react';

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
                        <div className="flex h-12    w-full justify-center items-center px-2" style={{ borderBottom: "1px solid  #c2c2c2ad" }}>
                            <div className="w-full px-3 py-3 ">
                                <p className=" font-bold text-lg   ">01Booster</p>
                            </div>
                            <div className=" py-1 h-full">
                                <div className=' h-full aspect-square bg-white rounded-full'>
                                </div>
                            </div>
                        </div>
                        <div className=" ">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}