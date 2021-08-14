import React, {useState} from 'react';
import Cookies from 'js-cookie'


const ContactForm = ({setShowContactForm, newEditRef}) => {
    const clickHandler = () => {
        setShowContactForm(false)
    }
    const url = '/rent/'

    const sendMail = async (data) => {
        const csrftoken = Cookies.get('csrftoken')
            await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
                .then(response => setResponse(response.msg))
                .catch(()=> setResponse('有東西出錯了，請稍後再試試'))

    }

    const [response, setResponse] = useState('')

    const submitHandler = (evt) => {
        evt.preventDefault()
        const mailData = {
            name: nameRef.current.value,
            code: codeRef.current.value,
            email: emailRef.current.value,
            edit: editRef.current.value,
            completed: false
        }
        sendMail(mailData)
        nameRef.current.value = ''
        codeRef.current.value = ''
        emailRef.current.value = ''
        editRef.current.value = ''
        newEditRef.set(mailData)
        // setShowContactForm(false)
    }

    const nameRef = React.createRef()
    const emailRef = React.createRef()
    const codeRef = React.createRef()
    const editRef = React.createRef()
    return (
        <div className='fixed w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-40 z-20'>
            <div className='bg-yellow-300 dark:bg-black dark:text-white w-auto h-auto p-6 flex justify-center flex-col rounded border border-black relative'>
                <button onClick={clickHandler} className='absolute top-0 right-0 p-2'>
                    <i className="fas fa-times text-black dark:text-white"></i>
                </button>
                <form className='w-auto h-auto flex flex-col' onSubmit={submitHandler}>
                    <h1 className='text-center text-xl'>修改內容</h1>
                    <div className="grid grid-cols-2">
                        <input name={'name'} placeholder={'社區名稱'} type="text" ref={nameRef} className='focus:ring-2 rounded  p-2 m-1.5 text-black'
                               required={true}/>
                        <input name={'code'} placeholder={'新增時你輸入的文字'} type='text'
                               ref={codeRef} className='focus:ring-2 rounded  p-2 m-1.5 text-black'
                               required={true}/>
                    </div>
                    <input type="email" name='email' placeholder={'可連絡你的信箱'} ref={emailRef} className='focus:ring-2 rounded  p-2 m-1.5 text-black'
                           required={true}/>
                    <textarea name="edit" placeholder={'需要如何修改？'}  rows="5" ref={editRef} className='focus:ring-2 rounded p-2 m-1.5 resize-none text-black'></textarea>

                    <h1 className='text-center'>{response}</h1>

                    <button
                        className='shadow transform hover:scale-110 duration-300 mt-2 ml-auto mr-auto p-2 ring-2 ring-indigo-300 rounded bg-white dark:text-black w-48 h-auto'>送出
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ContactForm;
