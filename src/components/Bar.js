import React from 'react';

const Bar = ({setRentalInfo, data}) => {
    const searchRef = React.createRef()

    const changeHandler = () => {
        if (searchRef.current.value === '') {
            setRentalInfo(data)
        } else {
            const searchInfo = data.filter((info) => info.name.indexOf(searchRef.current.value) !== -1)
            setRentalInfo(searchInfo)
        }
    }
    return (
        <div className='w-full h-auto bg-yellow-300 p-2 flex justify-between'>
            <input type="text" className='shadow focus:ring-2 rounded  p-1' ref={searchRef} onChange={changeHandler}/>
            <button className='shadow p-2 ring-2 ring-indigo-300 rounded bg-white w-auto h-auto'>新增一間房子</button>
        </div>
    );
};

export default Bar;
