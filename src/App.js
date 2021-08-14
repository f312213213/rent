import './App.css';
import RentList from "./components/RentList";
import Bar from "./components/Bar";
import Cover from "./components/Cover";
import React, {useState, useEffect} from "react";
import AddForm from "./components/AddForm";
import FunctionList from "./components/FumctionList";
import firebase from "firebase/app";
import 'firebase/database';
import ContactForm from "./components/ContactForm";

function App() {
    const [editing, setEditing] = useState(false)
    const [data, setData] = useState([])
    const [rentalInfo, setRentalInfo] = useState([])
    const [display, setDisplay] = useState(true)
    const [showContactForm, setShowContactForm] = useState(false)


    //For production
    const firebaseConfig = {
        apiKey: "AIzaSyDqKJC73_j8zoNqzYpv4Cn0BO9Q4pcq6Xk",
        authDomain: "rental-info-28a1c.firebaseapp.com",
        databaseURL: "https://rental-info-28a1c-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "rental-info-28a1c",
        storageBucket: "rental-info-28a1c.appspot.com",
        messagingSenderId: "338425984791",
        appId: "1:338425984791:web:13ae50f4da76784860a952"
    }

    //For testing

    // const firebaseConfig = {
    //     apiKey: "AIzaSyBM7a4n_XfyFPYKdRxXmjRUA5WD_bukw2I",
    //     authDomain: "test-12069.firebaseapp.com",
    //     databaseURL: "https://test-12069-default-rtdb.asia-southeast1.firebasedatabase.app/",
    //     projectId: "test-12069",
    //     storageBucket: "test-12069.appspot.com",
    //     messagingSenderId: "220580045965",
    //     appId: "1:220580045965:web:7d126061a231440b79eec4"
    // }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const informationRef = firebase.database().ref('information')
    const editRef = firebase.database().ref('editRecord')

    useEffect(() => {
        informationRef.on('value', (snapshot) => {
            setRentalInfo(Object.values(snapshot.val()).reverse())
            setData(Object.values(snapshot.val()).reverse())
        })
    },[])

    const newInformationRef = informationRef.push()
    const newEditRef = editRef.push()

    return (
        <>
            {display && <Cover setDisplay={setDisplay} />}
            {showContactForm && <ContactForm showContactForm={showContactForm} setShowContactForm={setShowContactForm} newEditRef={newEditRef}/>}
            {editing && <AddForm rentalInfo={rentalInfo} setRentalInfo={setRentalInfo} editing={editing} setEditing={setEditing} newInformationRef={newInformationRef}/>}
            <Bar editing={editing} setEditing={setEditing} setRentalInfo={setRentalInfo} rentalInfo={rentalInfo}
                 data={data}/>
            <RentList infos={rentalInfo}/>
            <FunctionList showContactForm={showContactForm} setShowContactForm={setShowContactForm}/>
        </>
    );
}

export default App;
