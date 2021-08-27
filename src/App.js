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
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MyShare from "./components/MyShare";
import EditForm from "./components/EditForm";


function App() {
    const [editing, setEditing] = useState(false)
    const [editingForm, setEditingForm] = useState(false)
    const [data, setData] = useState([])
    const [rentalInfo, setRentalInfo] = useState([])
    const [display, setDisplay] = useState(true)
    const [showContactForm, setShowContactForm] = useState(false)
    const [logged, setLogged] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [outside, setOutside] = useState(true)
    const [nowEdit, setNowEdit] = useState({})



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

    const db = firebase.database()
    const updateRef = firebase.database().ref()
    const informationRef = firebase.database().ref('information')
    const editRef = firebase.database().ref('editRecord')

    useEffect(() => {
        setLoading(true)
        informationRef.on('value', (snapshot) => {
            const newData = Object.values(snapshot.val())
            newData.forEach(obj => {
                if (obj.user) {
                    obj.user.name = ''
                    obj.user.mail = ''
                }
                if (obj.ip) {
                    obj.ip = ''
                    obj.user = {
                        uid: ""
                    }
                }
            })

            let dataKey = []

            informationRef.once('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    dataKey.push(childSnapshot.key)
                });
            })

            newData.forEach((data, index) => {
                data.key = dataKey[index]
            })
            newData.reverse()
            setRentalInfo(newData)
            setData(newData)


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
                    console.error(error)
                    setLoading(false)
                })

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
        <Router>
            {
                loading &&
                <div
                    className='fixed w-full h-screen bg-gray-700 opacity-40 z-20 flex justify-center items-center z-50'>
                    <Ring color={'#fffff'}/>
                </div>
            }
            {
                display && !loading && <Cover setDisplay={setDisplay}/>
            }
            {
                showContactForm && <ContactForm
                    setShowContactForm={setShowContactForm}
                    newEditRef={newEditRef}
                    loading={loading}
                    setLoading={setLoading}
                />
            }
            {
                editingForm && <EditForm editingForm={editingForm} setEditingForm={setEditingForm} nowEdit={nowEdit}
                                         setLoading={setLoading} userInfo={userInfo} updateRef={updateRef}/>
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

            <Switch>
                <Route path={'/'} exact component={() => <RentList infos={rentalInfo}/>}/>
                <Route path={'/edit'} exact
                       component={() => <MyShare infos={rentalInfo} userInfo={userInfo} setEditingForm={setEditingForm}
                                                 setNowEdit={setNowEdit} db={db}/>}/>
                {/*<Route path={'/edit'} exact component={() => <MyShare infos={rentalInfo} userInfo={userInfo}/>} />*/}
            </Switch>


            <FunctionList showContactForm={showContactForm} setShowContactForm={setShowContactForm} logged={logged}/>
        </Router>
    );
}

;

export default App;
