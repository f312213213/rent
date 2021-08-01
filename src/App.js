import './App.css';
import RentList from "./components/RentList";
import Bar from "./components/Bar";
import React, {useState, useEffect} from "react";
import AddForm from "./components/AddForm";
import firebase from "firebase/app";
import 'firebase/database';

function App() {
    const [editing, setEditing] = useState(false)
    const [data, setData] = useState([])
    const [rentalInfo, setRentalInfo] = useState([])

    const firebaseConfig = {
        apiKey: "AIzaSyDqKJC73_j8zoNqzYpv4Cn0BO9Q4pcq6Xk",
        authDomain: "rental-info-28a1c.firebaseapp.com",
        databaseURL: "https://rental-info-28a1c-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "rental-info-28a1c",
        storageBucket: "rental-info-28a1c.appspot.com",
        messagingSenderId: "338425984791",
        appId: "1:338425984791:web:13ae50f4da76784860a952"
    }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const informationRef = firebase.database().ref('information')

    useEffect(() => {
        informationRef.on('value', (snapshot) => {
            setRentalInfo(Object.values(snapshot.val()).reverse())
            setData(Object.values(snapshot.val()))
        })
    },[])

    const newInformationRef = informationRef.push()

    return (
        <>
            {editing && <AddForm rentalInfo={rentalInfo} setRentalInfo={setRentalInfo} editing={editing} setEditing={setEditing} newInformationRef={newInformationRef}/>}
            <Bar editing={editing} setEditing={setEditing} setRentalInfo={setRentalInfo} rentalInfo={rentalInfo}
                 data={data}/>
            <RentList infos={rentalInfo}/>
        </>
    );
}

export default App;
