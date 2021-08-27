import React, {useState} from 'react';
import DarkMode from "./DarkMode";
import Contact from "./Contact";
import {Link} from "react-router-dom";
import ToggleEdit from "./ToggleEdit";
import ToggleHome from "./ToggleHome";

const FunctionList = ({showContactForm, setShowContactForm, logged}) => {
        const [expand, setExpand] = useState(false)

        return (
            <ul className='fixed bottom-0 right-0'>
                <li className={`${expand ? '' : 'hidden'}`}><DarkMode expand={expand} setExpand={setExpand}/></li>
                <li className={`${expand ? '' : 'hidden'}`}><Contact expand={expand} setExpand={setExpand}
                                                                     showContactForm={showContactForm}
                                                                     setShowContactForm={setShowContactForm}/></li>
                {
                    logged && <Link to={'/edit'}>
                        <li className={`${expand ? '' : 'hidden'}`}><ToggleEdit expand={expand} setExpand={setExpand}/></li>
                    </Link>
                }

                <Link to={'/'}>
                    <li className={`${expand ? '' : 'hidden'}`}><ToggleHome expand={expand} setExpand={setExpand}/></li>
                </Link>
                <li>
                    <button className='dark:bg-white bg-black w-12 h-12 m-2 rounded-full'
                            onClick={() => setExpand(!expand)}
                    >
                        {
                            !expand
                                ? <i className="fas fa-align-right text-white dark:text-black"></i>
                                : <i className="fas fa-times text-white dark:text-black"></i>
                        }

                    </button>
                </li>

            </ul>

        );
    }
;

export default FunctionList;
