import React from 'react';

const Contact = ({expand, setExpand, setShowContactForm}) => {
    const clickHandler = () => {
        setExpand(!expand)
        setShowContactForm(true)
    }

    return (
        <button className='dark:bg-white bg-black w-12 h-12 m-2 rounded-full' onClick={clickHandler}>
            <i className="far fa-comment-dots text-white dark:text-black"></i>
        </button>
    );
};

export default Contact;
