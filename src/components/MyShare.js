import React from 'react';
import DetailShare from "./DetailShare";

const MyShare = ({infos, userInfo, setEditingForm, setNowEdit, db}) => {
    return (
        <div
            className='dark:bg-black grid w-auto h-auto  2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {infos.filter((info) => info.user.uid === userInfo.uid).map((share, index) => (
                <DetailShare info={share} key={index} setEditingForm={setEditingForm} setNowEdit={setNowEdit} db={db}/>))}
        </div>
    );
}
;

export default MyShare;
