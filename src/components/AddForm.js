import React from 'react';
import Select from 'react-select'

const AddForm = () => {
    const options = [
        { value: '單人套房', label: '單人套房' },
        { value: '單人雅房', label: '單人雅房' },
        { value: '家庭式', label: '家庭式' },
        { value: '雙人雅房', label: '雙人雅房' },
        { value: '雙人套房', label: '雙人套房' },
    ]
    return (
        <>
            <form className='justify-items-center bg-black p-4' id={'add_form'}>
                <input type="text" className='focus:ring-2 rounded  p-1' placeholder={'Name'} required={true}/>
                <input type='number' className='focus:ring-2 rounded  p-1' required={true}/>
                <input type="text" className='focus:ring-2 rounded  p-1' required={true}/>
                <input type="checkbox" className='focus:ring-2 rounded  p-1' required={true}/>
                <input type="number" className='focus:ring-2 rounded  p-1' required={true}/>
                <input type="number" className='focus:ring-2 rounded  p-1' required={true}/>
                <Select options={options} />
            </form>

        </>
        

    );
};

export default AddForm;
