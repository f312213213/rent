import React, {useEffect} from 'react';

const DarkMode = () => {
    useEffect(() => {
        if (localStorage.theme) {
            if (localStorage.theme === 'light') {
                document.body.classList.remove('dark')
            } else {
                document.body.classList.add('dark')
                localStorage.theme = 'dark'
            }
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark')
            localStorage.theme = 'dark'
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.classList.remove('dark')
            localStorage.theme = 'light'
        }
    },[])



    const clickHandler = () => {
        if (localStorage.theme === 'light') {
            document.body.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.body.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }



    return (
        <button className='dark:bg-white bg-black w-12 h-12 fixed bottom-0 right-0 m-4 rounded-full' onClick={clickHandler}>
            🌓
        </button>
    );
};

export default DarkMode;
