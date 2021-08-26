import React, {useEffect} from 'react';

const DarkMode = ({expand, setExpand}) => {
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
        setExpand(!expand)
    }



    return (
        <button className='dark:bg-white bg-black w-12 h-12 m-2 rounded-full' onClick={clickHandler}>
            🌓
        </button>
    );
};

export default DarkMode;
