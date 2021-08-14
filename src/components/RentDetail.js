import React, {useState} from 'react';

const RentDetail = ({info}) => {
    const [loadMore, setLoadMore] = useState(false)

    return (
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
            {!loadMore && <button
                className='z-0 shadow ring-2 ring-white hover:bg-yellow-600 dark:hover:bg-gray-300 dark:bg-white dark:text-black hover:ring-indigo-300 transform hover:scale-110 duration-300 bg-yellow-500 w-auto h-auto p-1 rounded mt-1 text-white '
                onClick={() => setLoadMore(true)}>顯示更多</button>}
            {loadMore &&
                <>
                    <div className='grid grid-cols-3 border-black border-t-2 mt-2'>
                        <h1 className={info.security ? '' : 'text-gray-300 dark:text-black line-through'}>管理員</h1>
                        <h1 className={info.furniture.refrigerator ? '' : 'text-gray-300 dark:text-black line-through'}>冰箱</h1>
                        <h1 className={info.furniture.washingMachine ? '' : 'text-gray-300 dark:text-black line-through'}>洗衣機</h1>
                        <h1 className={info.furniture.dryer ? '' : 'text-gray-300 dark:text-black line-through'}>烘衣機</h1>
                        <h1 className={info.furniture.tv ? '' : 'text-gray-300 dark:text-black line-through'}>電視</h1>
                        <h1 className={info.furniture.AC ? '' : 'text-gray-300 dark:text-black line-through'}>冷氣</h1>
                        <h1 className={info.furniture.heater ? '' : 'text-gray-300 dark:text-black line-through'}>熱水器</h1>
                        <h1 className={info.furniture.bed ? '' : 'text-gray-300 dark:text-black line-through'}>床</h1>
                        <h1 className={info.furniture.wardrobe ? '' : 'text-gray-300 dark:text-black line-through'}>衣櫃</h1>
                        <h1 className={info.furniture.internet ? '' : 'text-gray-300 dark:text-black line-through'}>網路</h1>
                        <h1 className={info.furniture.elevator ? '' : 'text-gray-300 dark:text-black line-through'}>電梯</h1>
                        <h1 className={info.furniture.lot ? '' : 'text-gray-300 dark:text-black line-through'}>停車場</h1>
                        <h1 className={info.furniture.sofa ? '' : 'text-gray-300 dark:text-black line-through'}>沙發</h1>
                        <h1 className={info.furniture.desk ? '' : 'text-gray-300 dark:text-black line-through'}>書桌</h1>
                        <h1 className={info.furniture.balcony ? '' : 'text-gray-300 dark:text-black line-through'}>陽台</h1>
                        <h1 className={info.furniture.garbage ? '' : 'text-gray-300 dark:text-black line-through'}>垃圾場</h1>
                        <h1 className={info.furniture.pet ? '' : 'text-gray-300 dark:text-black line-through'}>養寵物</h1>
                        <h1 className={info.furniture.cook ? '' : 'text-gray-300 dark:text-black line-through'}>可開伙</h1>
                        {/*<h1 className={info.furniture.separate ? '' : 'text-gray-300 dark:text-black line-through'}>乾溼分離</h1>*/}
                        {/*<h1 className={info.furniture.fountain ? '' : 'text-gray-300 dark:text-black line-through'}>飲水機</h1>*/}
                    </div>
                    {info.other && <h1 className='border-t-2 border-gray-600 mt-2 '>其他：</h1>}
                    {info.other && <h1 style={{whiteSpace: 'pre-line'}}>{info.other}</h1>}
                    <button
                        className='z-0 shadow ring-2 ring-indigo-300 hover:bg-yellow-600 dark:hover:bg-gray-300 dark:bg-white dark:text-black transform hover:scale-110 duration-300 bg-yellow-500 w-auto h-auto p-1 rounded mt-1 text-white'
                        onClick={() => setLoadMore(false)}>收合
                    </button>
                </>
            }
        </div>
    );
}


export default RentDetail;
