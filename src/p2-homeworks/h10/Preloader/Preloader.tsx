import React from 'react';
import preloader from "./loader.gif";
import stl from './Preloader.module.css'
const Preloader = () => {
    return (
        <div className={stl.wrapper}>
            <img className={stl.prloader} src={preloader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader;