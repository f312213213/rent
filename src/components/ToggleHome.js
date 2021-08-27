import React from 'react';

const ToggleHome = ({expand, setExpand}) => {
    return (
        <button className='dark:bg-white bg-black w-12 h-12 m-2 rounded-full' onClick={() => setExpand(!expand)}>
            <i className="fas fa-home text-white dark:text-black"></i>
        </button>
    );
};

export default ToggleHome;
