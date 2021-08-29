import React, {useState} from 'react';



const ContactForm = ({setShowContactForm, newEditRef, setLoading}) => {
    const clickHandler = () => {
        setShowContactForm(false)
    }

    const [response, setResponse] = useState('')

    const submitHandler = (evt) => {
        setLoading(true)
        evt.preventDefault()
        const mailData = {
            topic: nameRef.current.value,
            email: mailRef.current.value,
            text: editRef.current.value,
            completed: false
        }
        nameRef.current.value = ''
        editRef.current.value = ''
        mailRef.current.value = ''
        newEditRef.set(mailData)
        setTimeout(() => {
            setLoading(false)
            setResponse('我們已經收到了，將盡速回復您')
        }, 1500)

    }

    const nameRef = React.createRef()
    const editRef = React.createRef()
    const mailRef = React.createRef()


    return (
        <div className='fixed w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-40 z-20'>
            <div className='bg-yellow-300 dark:bg-black dark:text-white w-auto h-auto p-6 flex justify-center flex-col rounded border border-black relative'>
                <button onClick={clickHandler} className='absolute top-0 right-0 p-2'>
                    <i className="fas fa-times text-black dark:text-white"></i>
                </button>
                <form className='w-auto h-auto flex flex-col' onSubmit={submitHandler}>
                    <h1 className='text-center text-xl'>聯絡我們</h1>
                    <div className="grid grid-cols-2">
                        <input name={'name'} placeholder={'主旨'} type="text" ref={nameRef} className='focus:ring-2 rounded p-2 m-1.5 text-black '
                               required={true}/>
                        <input type="email" name={'email'} placeholder={'信箱'} ref={mailRef} className='focus:ring-2 rounded p-2 m-1.5 text-black' required={true} />
                    </div>
                    <textarea required={true} name="edit" placeholder={'內容'}  rows="5" ref={editRef} className='focus:ring-2 rounded p-2 m-1.5 resize-none text-black'></textarea>

                    <h1 className='text-center'>{response}</h1>

                    <button
                        className='shadow transform hover:scale-110 duration-300 mt-2 ml-auto mr-auto p-2 ring-2 ring-indigo-300 rounded bg-white dark:text-black w-48 h-auto'>送出
                    </button>
                </form>
            </div>
        </div>
    )

};

export default ContactForm;
