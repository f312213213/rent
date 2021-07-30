import './App.css';
import RentList from "./components/RentList";
import Bar from "./components/Bar";
import React, {useState} from "react";
import AddForm from "./components/AddForm";



function App() {
    const data = [
        {
            name: '日內瓦',
            size: 7,
            roomType: '單人套房',
            prize: 8000,
            security: true,
            electric: 4,
            water: 200,
            furniture: {
                refrigerator: true,
                washingMachine: true,
                dryer: true,
                tv: true,
                AC: true,
                heater: true,
                bed: true,
                wardrobe: true,
                internet: true,
                elevator: true,
                lot: true,
                sofa: true,
                desk: true,
                balcony: true,
                garbage: true,
                pet: false,
                cook: true
            }
        },
        {
            name: '哈哈',
            size: 7,
            roomType: '家庭式',
            prize: 8000,
            security: true,
            electric: 4,
            water: 200,
            furniture: {
                refrigerator: true,
                washingMachine: true,
                dryer: true,
                tv: true,
                AC: true,
                heater: true,
                bed: true,
                wardrobe: true,
                internet: true,
                elevator: true,
                lot: true,
                sofa: true,
                desk: true,
                balcony: true,
                garbage: true,
                pet: false,
                cook: true
            }
        }
    ]
    const [rentalInfo, setRentalInfo] = useState(data)

    return (
        <>
            <Bar setRentalInfo={setRentalInfo} rentalInfo={rentalInfo} data={data}/>
            <AddForm />
            <RentList infos={rentalInfo}/>
        </>
    );
}

export default App;
