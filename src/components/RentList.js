import React from 'react';
import RentDetail from "./RentDetail";

const RentList = ({infos}) => {
    return (
        <div className='dark:bg-black grid w-auto h-auto  2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {infos.map((info, index) => (<RentDetail info={info} key={index}/>))}
        </div>
    );
};

export default RentList;
