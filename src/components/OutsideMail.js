import React from 'react';
import {Ring} from "react-spinners-css";

const OutsideMail = ({loading, setEditing, setShowContactForm, logoutHandler, parent}) => {

    if (parent === 'addForm') {
        return (
            <div
                className='w-full h-screen bg-gray-700 bg-opacity-40 fixed flex justify-center items-center p-2 z-10'>
                <div className='flex flex-col dark:bg-black bg-yellow-300 p-4 fixed space-y-2'>
                    {loading && <Ring color={'#fffff'}/>}
                    <button onClick={() => setEditing(false)} className='absolute top-0 right-0 p-2'>
                        <i className="fas fa-times text-black dark:text-white"></i>
                    </button>
                    <div className='dark:text-white'>此信箱非臺北大學所配發之Gmail帳號</div>
                    <button className='border border-2 bg-white p-2 rounded-3xl space-x-2 hover:bg-gray-300 duration-150' onClick={logoutHandler}>
                        登出
                    </button>
                </div>
            </div>
        );
    } else if (parent === 'contactForm') {
        return (
            <div
                className='w-full h-screen bg-gray-700 bg-opacity-40 fixed flex justify-center items-center p-2 z-10'>
                <div className='flex flex-col dark:bg-black bg-yellow-300 p-4 fixed space-y-2'>
                    {loading && <Ring color={'#fffff'}/>}
                    <button onClick={() => setShowContactForm(false)} className='absolute top-0 right-0 p-2'>
                        <i className="fas fa-times text-black dark:text-white"></i>
                    </button>
                    <div className='dark:text-white'>此信箱非臺北大學所配發之Gmail帳號</div>
                    <button className='border border-2 bg-white p-2 rounded-3xl space-x-2 hover:bg-gray-300 duration-150' onClick={logoutHandler}>
                        登出
                    </button>
                </div>
            </div>
        );
    }

};

export default OutsideMail;
