import React, {useState} from 'react';
import ConfirmDelete from "./ConfirmDelete";

const DetailShare = ({info, setEditingForm, setNowEdit, db}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <>
            {
                showConfirm && <ConfirmDelete setShowConfirm={setShowConfirm} name={info.name} db={db} uniKey={info.key}/>
            }

            <div
                className='shadow shadow-lg border-2 border-gray-500 dark:hover:border-white hover:border-black duration-300 bg-yellow-200 dark:bg-gray-700 dark:text-white w-60 h-auto rounded m-auto mt-4 p-4 top-0 '>
                <h1 className='text-center text-lg'>{info.name} {info.size}坪</h1>
                <div className="grid grid-cols-2">
                    <h1>{info.roomType}</h1>
                    <h1>{info.prize}元/月</h1>
                </div>
                <h1>電費：{info.electric}</h1>
                <h1>水費：{info.water}</h1>
                {info.address && <h1>地址：{info.address}</h1>}
                <h1>時間：{info.date}</h1>

                <button
                    className='z-0 shadow ring-2 ring-white hover:bg-yellow-600 dark:hover:bg-gray-300 dark:bg-white dark:text-black hover:ring-indigo-300 transform hover:scale-110 duration-300 bg-yellow-500 w-auto h-auto p-1 rounded mt-1 text-white '
                    onClick={() => {
                        setEditingForm(true)
                        setNowEdit(info)
                    }}>編輯
                </button>

                <button
                    className='z-0 shadow ring-2 ring-white hover:bg-yellow-600 dark:hover:bg-gray-300 dark:bg-white dark:text-black hover:ring-indigo-300 transform hover:scale-110 duration-300 bg-yellow-500 w-auto h-auto p-1 rounded mt-1 ml-5 text-white '
                    onClick={() => {
                        setShowConfirm(true)
                    }}
                >刪除
                </button>
            </div>
        </>

    );
}

export default DetailShare;
