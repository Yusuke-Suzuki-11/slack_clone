import React from 'react';

export const ChatSpace = () => {
    return (
        <>
            <div className=' bg-black h-full'>
                <div className="flex">
                    <div className="w-72 shrink-0 ">
                    </div>
                    <div className='w-full h-full'>
                        <div className="block w-full" style={{ borderBottom: "1px solid  #c2c2c2ad" }}>
                            <div className="flex h-12 items-center ml-6 ">
                                <p className="font-bold">スレッド</p>
                            </div>
                        </div>
                        <div className='overflow-scroll'>
                            <p>
                                fsda
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}