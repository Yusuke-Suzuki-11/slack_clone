import React from 'react';

export const Header = () => {
    return (
        <>
            <div className='fixed  z-10  h-11 w-full'>
                <div className="w-full h-full bg-theme-color relative" style={{ borderBottom: "1px solid  #c2c2c2ad" }}>
                    <div className='py-1.5 w-5/12 h-full block m-auto '>
                        <div className=' bg-neutral-50  h-full rounded-md  '>
                            <p className=' flex justify-center items-center h-full text-sm '>
                                xxxxx内を検索する
                            </p>
                        </div>
                    </div>
                    <div className="absolute h-full py-1 top-1/2 transform  -translate-y-1/2 right-4">
                        <div className='bg-green-300 rounded-md h-full aspect-square  '>
                            A
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}