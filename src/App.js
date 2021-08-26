import './App.css';
import RentList from "./components/RentList";
import Bar from "./components/Bar";
import Cover from "./components/Cover";
import React, {useState, useEffect} from "react";
import AddForm from "./components/AddForm";
import FunctionList from "./components/FumctionList";
import firebase from "firebase/app";
import 'firebase/database';
import "firebase/auth";
import ContactForm from "./components/ContactForm";
import {Ring} from "react-spinners-css";


function App() {
    const [editing, setEditing] = useState(false)
    const [data, setData] = useState([])
    const [rentalInfo, setRentalInfo] = useState([])
    const [display, setDisplay] = useState(true)
    const [showContactForm, setShowContactForm] = useState(false)
    const [logged, setLogged] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [outside, setOutside] = useState(true)


    //For production
    const firebaseConfig = {
        apiKey: "AIzaSyDqKJC73_j8zoNqzYpv4Cn0BO9Q4pcq6Xk",
        authDomain: "rent.gdscntpu.club",
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
        setLoading(true)
        informationRef.on('value', (snapshot) => {
            const newData = Object.values(snapshot.val()).reverse()
            newData.forEach(obj => {
                if (obj.user) {
                    obj.user = ''
                }
                if (obj.ip) {
                    obj.ip = ''
                }
            })
            setRentalInfo(newData)
            setData(newData)

            setLoading(true)
            firebase.auth().getRedirectResult()
                .then((result) => {
                    if (result.credential) {
                        setLogged(true)
                        setUserInfo(result.user)
                        if (result.user.email.indexOf('@gm.ntpu.edu.tw') === -1) {
                            setOutside(true)
                        } else if (result.user.email.indexOf('@gm.ntpu.edu.tw') !== -1) {
                            setOutside(false)
                        }
                    }
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                })
            setLoading(false)
        })

    }, [])

    const provider = new firebase.auth.GoogleAuthProvider();

    const loginHandler = () => {
        setLoading(true)
        firebase.auth().signInWithRedirect(provider)
    }

    const logoutHandler = () => {
        setLoading(true)
        firebase.auth().signOut()
            .then((res) => {
                console.log(res)
                setLogged(false)
                setOutside(true)
                setUserInfo({})
                setTimeout(() => {
                    setLoading(false)
                }, 1000)

            })
            .catch((error) => {
                console.error(error)
            });
    }


    const newInformationRef = informationRef.push()
    const newEditRef = editRef.push()

    return (
        <>
            {
                display && !loading && <Cover setDisplay={setDisplay}/>
            }
            {
                loading &&
                <div className='fixed w-full h-screen bg-gray-700 opacity-40 z-20 flex justify-center items-center'>
                    <Ring color={'#fffff'}/>
                </div>
            }
            {
                showContactForm && <ContactForm logoutHandler={logoutHandler} loginHandler={loginHandler}
                                                setShowContactForm={setShowContactForm}
                                                newEditRef={newEditRef} userInfo={userInfo} outside={outside}
                                                loading={loading}
                                                logged={logged}/>
            }
            {
                editing &&
                <AddForm logoutHandler={logoutHandler} loginHandler={loginHandler} userInfo={userInfo} outside={outside}
                         loading={loading}
                         setLoading={setLoading} logged={logged} rentalInfo={rentalInfo} setRentalInfo={setRentalInfo}
                         editing={editing} setEditing={setEditing} newInformationRef={newInformationRef}/>
            }

            <Bar editing={editing} setEditing={setEditing} setRentalInfo={setRentalInfo} rentalInfo={rentalInfo}
                 data={data} logged={logged} logoutHandler={logoutHandler} loginHandler={loginHandler}/>
            <RentList infos={rentalInfo}/>
            <FunctionList showContactForm={showContactForm} setShowContactForm={setShowContactForm}/>
        </>
    );
}

export default App;
