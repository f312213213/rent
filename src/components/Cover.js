import React from 'react';

const Cover = ({setDisplay}) => {
    const clickHandler = () => {
        setDisplay(false)
    }

    return (
        <div className='fixed w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-40 z-20'>
            <div className='bg-yellow-300 dark:bg-black dark:text-white w-48 h-auto p-6 flex justify-center flex-col rounded border border-black'>
                <h1 className='text-center text-xl'>聲明</h1>
                <p>本平台所顯示之資訊僅供參考，實際狀況仍須自行詢問各社區之管理員或房東。</p>
                <button onClick={clickHandler} className='shadow transform hover:scale-110 duration-300 mt-2 p-2 ring-2 ring-indigo-300 rounded bg-white dark:text-black w-auto h-auto '>確認</button>
            </div>
        </div>
    );
};

export default Cover;
