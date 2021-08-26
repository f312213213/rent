import React from 'react';

const Login = ({loginHandler}) => {
    return (
        <div className=' text-center'>
            <div className='dark:text-white mb-2'>
                請使用臺北大學Gmail登入
            </div>
            <button className='border border-2 bg-white pl-4 pr-4 pt-1 pb-1 rounded-3xl space-x-2 hover:bg-gray-300 hover:border-black duration-150'
                    onClick={loginHandler}>
                <i className="fab fa-google mr-2"></i>
                Sign In with Google
            </button>
        </div>
    );
};

export default Login;
