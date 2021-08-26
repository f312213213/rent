import React from 'react';

const Bar = ({editing, setEditing, setRentalInfo, data, logged, logoutHandler, loginHandler}) => {
    const searchRef = React.createRef()

    const changeHandler = () => {
        if (searchRef.current.value === '') {
            setRentalInfo(data)
        } else {
            const searchInfo = data.filter((info) => info.name.indexOf(searchRef.current.value) !== -1)
            setRentalInfo(searchInfo)
        }
    }

    const clickHandler = () => {
        setEditing(!editing)
    }
    return (
        <div className='w-full h-auto bg-yellow-300 p-2 flex justify-between dark:bg-black'>
            <input type="text" className='shadow focus:ring-2 rounded  p-1' ref={searchRef} onChange={changeHandler}
                   placeholder={'搜尋社區名稱'}/>
            <div>
                {logged &&
                <button onClick={logoutHandler}
                        className='shadow transform hover:scale-110 duration-300 p-2 ring-2 ring-indigo-300 rounded bg-white w-auto h-auto mr-2'>登出</button>
                }
                <button onClick={clickHandler}
                        className='shadow transform hover:scale-110 duration-300 p-2 ring-2 ring-indigo-300 rounded bg-white w-auto h-auto'>新增
                </button>


            </div>

        </div>
    );
};

export default Bar;
