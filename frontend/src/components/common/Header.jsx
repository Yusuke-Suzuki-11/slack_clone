import React from 'react';

export const Header = () => {
    return (
        <>
            <div className="w-full bg-purple-900 h-11 relative">
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
        </>
    );
}