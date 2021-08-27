import React from 'react';

const ConfirmDelete = ({setShowConfirm, name, db, uniKey}) => {
    const deleteHandler = () => {
        db.ref('/information/' + uniKey).remove()
        setShowConfirm(false)
    }

    return (
        <div className='fixed w-full h-screen flex justify-center items-center bg-gray-700 bg-opacity-40 z-20 top-0'>
            <div className='bg-yellow-300 dark:bg-black dark:text-white w-48 h-auto p-6 flex justify-center flex-col rounded border border-black'>
                <h1 className='text-center text-xl'>確認刪除{name}？</h1>
                <div className='w-full flex justify-between'>
                    <button onClick={deleteHandler} className='shadow transform hover:scale-110 duration-300 mt-2 p-2 ring-2 ring-indigo-300 rounded bg-white dark:text-black w-auto h-auto '>確認</button>
                    <button onClick={() => {setShowConfirm(false)}} className='shadow transform hover:scale-110 duration-300 mt-2 p-2 ring-2 ring-indigo-300 rounded bg-white dark:text-black w-auto h-auto '>取消</button>
                </div>

            </div>
        </div>
    );
};

export default ConfirmDelete;
