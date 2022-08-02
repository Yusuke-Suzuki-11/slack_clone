import React from 'react';

export const ChatSpace = () => {
    return (
        <>
            <div >
                <div className="flex">
                    <div className="w-72 shrink-0">
                    </div>
                    <div className='w-full justify-between'>
                        <div className="fixed h-12 block w-full bg-white" style={{ borderBottom: "1px solid  #c2c2c2ad" }}>
                            <div className="flex h-12 items-center ml-4">
                                <p className="font-bold">スレッド</p>
                            </div>
                        </div>

                        <div className='h-12'></div>
                        <div className='fixed w-full h-full bg-green-50'>
                            {/* コメントスペース */}
                            <div className=" bg-red-300 w-full h-full flex flex-col justify-end overflow-scroll  ">
                                {/* //TODOコメントをループさせる */}
                                <p>
                                    fdsafa
                                </p>
                                <p>
                                    fdsafa
                                </p>
                                <p>
                                    fdsafa
                                </p>
                                
                                <div className="bg-white mb-20 ">
                                    <div className="px-4 w-full">
                                        <textarea className=" w-full h-44 rounded-lg mb-7  " style={{ border: "1px solid  #c2c2c2ad" }}>
                                        </textarea>
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