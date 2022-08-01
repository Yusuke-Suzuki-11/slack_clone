import React from 'react';

export const SideBar = () => {
    return (
        <>
            <div className="fixed w-72 h-full bg-slate-400 ">
                <div className="flex h-full">
                    <div className="w-16  bg-slate-800 h-full block">
                        <div className=" w-full flex justify-center ">
                            <div className="px-4 w-full  ">
                                <div className=" my-2 aspect-square w-full bg-white  rounded-md ">
                                    A
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full h-full'>
                        <div className="w-full">
                            <p className=" font-bold text-lg   ">01Booster</p>
                        </div>
                        <div className='rounded-full h-full aspect-auto'>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}