import React, {useState, useEffect} from 'react';


const AddForm = ({newInformationRef, rentalInfo, setRentalInfo, editing, setEditing}) => {

    const [ipInfo, setIpInfo] = useState('')

    const getIP = async (url) => {
        const response = await fetch(url)
        const res = await response.json()
        setIpInfo(res)
    }

    useEffect(() => {
        getIP('https://ipgeolocation.abstractapi.com/v1/?api_key=20d73411ae6040bc9f1271b5df5b5c26')
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        const today = new Date();

        const currentDateTime =
            today.getFullYear() + '年' +
            (today.getMonth() + 1) + '月' +
            today.getDate() + '日'

        const data = {
            name: e.target.name.value,
            size: e.target.size.value,
            roomType: e.target.roomType.value,
            prize: e.target.prize.value,
            security: e.target.security.checked,
            electric: e.target.electric.value,
            address: e.target.address.value,
            water: e.target.water.value,
            furniture: {
                refrigerator: e.target.refrigerator.checked,
                washingMachine: e.target.washingMachine.checked,
                dryer: e.target.dryer.checked,
                tv: e.target.tv.checked,
                AC: e.target.AC.checked,
                heater: e.target.heater.checked,
                bed: e.target.bed.checked,
                wardrobe: e.target.wardrobe.checked,
                internet: e.target.internet.checked,
                elevator: e.target.elevator.checked,
                lot: e.target.lot.checked,
                sofa: e.target.sofa.checked,
                desk: e.target.desk.checked,
                balcony: e.target.balcony.checked,
                garbage: e.target.garbage.checked,
                pet: e.target.pet.checked,
                cook: e.target.cook.checked
            },
            other: e.target.other.value,
            date: currentDateTime,
            ip: ipInfo
        }
        setRentalInfo([
            ...rentalInfo,
            data
        ])
        setEditing(!editing)
        newInformationRef.set(data)
    }

    return (
        <div className='w-full h-screen bg-gray-700 bg-opacity-40 fixed flex justify-center items-start p-2 z-10'>
            <form className='flex flex-col bg-black p-4 fixed space-y-2' onSubmit={submitHandler}>
                <input name={'name'} placeholder={'社區名稱'} type="text" className='focus:ring-2 rounded  p-2'
                       required={true}/>
                <input name={'size'} placeholder={'大小：坪'} type='number' className='focus:ring-2 rounded  p-2'
                       required={true}/>
                <input name={'prize'} placeholder={'價格'} type="number" className='focus:ring-2 rounded  p-2'
                       required={true}/>
                <select name="roomType" id="roomType">
                    <option value="單人套房">單人套房</option>
                    <option value="單人雅房">單人雅房</option>
                    <option value="雙人雅房">雙人雅房</option>
                    <option value="雙人套房">雙人套房</option>
                    <option value="家庭式">家庭式</option>
                </select>
                <input name={'electric'} placeholder={'電費，可輸入台電'} type="text" className='focus:ring-2 rounded  p-2'
                       required={true}/>
                <input name={'water'} placeholder={'水費，可輸入台水'} type="text" className='focus:ring-2 rounded  p-2'
                       required={true}/>
                <input name={'address'} placeholder={'地址，選填'} type="text" className='focus:ring-2 rounded  p-2'/>
                <div className='grid grid-cols-3'>
                    <div>
                        <label htmlFor="security" className='text-white'>管理員</label>
                        <input name={'security'} id={'security'} value="true" type="checkbox"
                               className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="refrigerator" className='text-white'>冰箱</label>
                        <input name={'refrigerator'} id={'refrigerator'} type="checkbox" value={'true'}
                               className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="washingMachine" className='text-white'>洗衣機</label>
                        <input name={'washingMachine'} id={'washingMachine'} type="checkbox"
                               className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="dryer" className='text-white'>烘衣機</label>
                        <input name={'dryer'} id={'dryer'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="tv" className='text-white'>電視</label>
                        <input name={'tv'} id={'tv'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="AC" className='text-white'>冷氣</label>
                        <input name={'AC'} id={'AC'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="heater" className='text-white'>熱水器</label>
                        <input name={'heater'} id={'heater'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="bed" className='text-white'>床</label>
                        <input name={'bed'} id={'bed'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="wardrobe" className='text-white'>衣櫃</label>
                        <input name={'wardrobe'} id={'wardrobe'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="internet" className='text-white'>網路</label>
                        <input name={'internet'} id={'internet'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="elevator" className='text-white'>電梯</label>
                        <input name={'elevator'} id={'elevator'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="lot" className='text-white'>停車場</label>
                        <input name={'lot'} id={'lot'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="sofa" className='text-white'>沙發</label>
                        <input name={'sofa'} id={'sofa'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="desk" className='text-white'>書桌</label>
                        <input name={'desk'} id={'desk'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="balcony" className='text-white'>陽台</label>
                        <input name={'balcony'} id={'balcony'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="garbage" className='text-white'>垃圾場</label>
                        <input name={'garbage'} id={'garbage'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="pet" className='text-white'>養寵物</label>
                        <input name={'pet'} id={'pet'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                    <div>
                        <label htmlFor="cook" className='text-white'>開伙</label>
                        <input name={'cook'} id={'cook'} type="checkbox" className='focus:ring-2 rounded p-1'/>
                    </div>
                </div>
                <input name={'other'} placeholder={'其他'} type="text" className='focus:ring-2 rounded  p-2'/>
                <button type={'submit'} className='shadow ring-2 ring-indigo-300 rounded bg-white w-auto h-auto'>送出
                </button>
            </form>
        </div>
    );
};

export default AddForm;
