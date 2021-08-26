import React, {useState} from 'react';
import Cookies from 'js-cookie'
import {Ring} from "react-spinners-css";
import Login from "./Login";
import OutsideMail from "./OutsideMail";



const ContactForm = ({setShowContactForm, newEditRef, userInfo, loading, logged, outside, loginHandler, logoutHandler}) => {
    const clickHandler = () => {
        setShowContactForm(false)
    }

    const [response, setResponse] = useState('')

    const submitHandler = (evt) => {
        evt.preventDefault()
        const mailData = {
            name: nameRef.current.value,
            displayName: userInfo.displayName,
            email: userInfo.email,
            edit: editRef.current.value,
            completed: false
        }
        nameRef.current.value = ''
        editRef.current.value = ''
        newEditRef.set(mailData)
        setResponse('我們已經收到了，將盡速為您修改')
    }

    const nameRef = React.createRef()
    const editRef = React.createRef()

    const parent = 'contactForm'

    if (logged) {
        if (outside) {
            return (
                <OutsideMail loading={loading} setShowContactForm={setShowContactForm} logoutHandler={logoutHandler} parent={parent}/>
            )
        } else {
            return (
                <div className='fixed w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-40 z-20'>
                    <div className='bg-yellow-300 dark:bg-black dark:text-white w-auto h-auto p-6 flex justify-center flex-col rounded border border-black relative'>
                        <button onClick={clickHandler} className='absolute top-0 right-0 p-2'>
                            <i className="fas fa-times text-black dark:text-white"></i>
                        </button>
                        <form className='w-auto h-auto flex flex-col' onSubmit={submitHandler}>
                            <h1 className='text-center text-xl'>修改內容</h1>
                            <div className="grid grid-cols-2">
                                <input name={'name'} placeholder={'社區名稱'} type="text" ref={nameRef} className='focus:ring-2 rounded p-2 m-1.5 text-black '
                                       required={true}/>
                                <input type="text" value={userInfo.email} className='focus:ring-2 rounded p-2 m-1.5 text-black' disabled/>
                            </div>
                            <textarea name="edit" placeholder={'需要如何修改？'}  rows="5" ref={editRef} className='focus:ring-2 rounded p-2 m-1.5 resize-none text-black'></textarea>

                            <h1 className='text-center'>{response}</h1>

                            <button
                                className='shadow transform hover:scale-110 duration-300 mt-2 ml-auto mr-auto p-2 ring-2 ring-indigo-300 rounded bg-white dark:text-black w-48 h-auto'>送出
                            </button>
                        </form>
                    </div>
                </div>
            )
        }

    } else {
        return (
            <div className='w-full h-screen bg-gray-700 bg-opacity-40 fixed flex justify-center items-center p-2 z-10'>
                <div className='flex flex-col dark:bg-black bg-yellow-300 p-4 fixed space-y-2 justify-center'>
                    <button onClick={()=>setShowContactForm(false)} className='absolute top-0 right-0 p-2'>
                        <i className="fas fa-times text-black dark:text-white"></i>
                    </button>
                    <div className='mx-auto'>
                        {loading && <Ring color={'#fffff'}/>}
                    </div>
                    {!loading && <Login loginHandler={loginHandler}/>}
                </div>
            </div>
        )
    }
};

export default ContactForm;
