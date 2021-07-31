import React, {useState} from 'react';

const RentDetail = ({info}) => {
    const [loadMore, setLoadMore] = useState(false)

    return (
        <div className='shadow shadow-lg border-2 border-gray-500 hover:border-gray-800 duration-300 bg-yellow-200 w-48 h-auto rounded m-auto mt-4 p-4 top-0'>
            <h1 className='text-center'>{info.name} {info.size}坪</h1>
            <h1>房型：{info.roomType}</h1>
            <h1>{info.prize}元/月</h1>
            <h1>電費：{info.electric}</h1>
            <h1>水費：{info.water}</h1>
            <h1>地址：{info.address}</h1>
            {!loadMore && <button className='z-0 shadow ring-2 ring-indigo-300 hover:bg-yellow-700 transform hover:scale-110 duration-300 bg-yellow-500 w-auto h-auto p-1 rounded mt-1 text-white' onClick={() => setLoadMore(true)}>顯示更多</button>}
            {loadMore &&
                <>
                    <h1>管理員：{info.security?'有':'沒有'}</h1>
                    <h1>冰箱：  {info.furniture.refrigerator?'有':'沒有'}</h1>
                    <h1>洗衣機：{info.furniture.washingMachine?'有':'沒有'}</h1>
                    <h1>烘衣機：{info.furniture.dryer?'有':'沒有'}</h1>
                    <h1>電視：  {info.furniture.tv?'有':'沒有'}</h1>
                    <h1>冷氣：  {info.furniture.AC?'有':'沒有'}</h1>
                    <h1>熱水器：{info.furniture.heater?'有':'沒有'}</h1>
                    <h1>床：    {info.furniture.bed?'有':'沒有'}</h1>
                    <h1>衣櫃：  {info.furniture.wardrobe?'有':'沒有'}</h1>
                    <h1>網路：  {info.furniture.internet?'有':'沒有'}</h1>
                    <h1>電梯：  {info.furniture.elevator?'有':'沒有'}</h1>
                    <h1>停車場：{info.furniture.lot?'有':'沒有'}</h1>
                    <h1>沙發：  {info.furniture.sofa?'有':'沒有'}</h1>
                    <h1>書桌：  {info.furniture.desk?'有':'沒有'}</h1>
                    <h1>陽台：  {info.furniture.balcony?'有':'沒有'}</h1>
                    <h1>垃圾場：{info.furniture.garbage?'有':'沒有'}</h1>
                    <h1>養寵物：{info.furniture.pet?'有':'沒有'}</h1>
                    <h1>可開伙：{info.furniture.cook?'有':'沒有'}</h1>
                    <button className='z-0 shadow ring-2 ring-indigo-300 hover:bg-yellow-700 transform hover:scale-110 duration-300 bg-yellow-500 w-auto h-auto p-1 rounded mt-1 text-white' onClick={() => setLoadMore(false)}>收合</button>
                </>
            }
        </div>
    );
};

export default RentDetail;
