import React, {useState, useEffect} from 'react';
import DetailShare from "./DetailShare";

const MyShare = ({infos, userInfo, setEditingForm, setNowEdit, db}) => {
        const [filtered, setFiltered] = useState([]);

        useEffect(() => {
            setFiltered(infos.filter((info) => info.user.uid === userInfo.uid))
        }, [])

    if (filtered.length > 0) {
        return (
            <div
                className='dark:bg-black grid w-auto h-auto  2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {filtered.map((share) => (
                    <DetailShare info={share} key={share.key} setEditingForm={setEditingForm} setNowEdit={setNowEdit}
                                 db={db}/>))}
            </div>
        );
    } else {
        return (
            <div className='dark:text-white'>你還沒登入或尚未發布任何一篇資訊！</div>
        )
    }

    }
;

export default MyShare;
