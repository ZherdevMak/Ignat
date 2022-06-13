import React from 'react'
import stl from './Error404.module.css'
function Error404() {
    return (
        <div className={stl.div}>
            <div className={stl.number}>404</div>
            <div className={stl.text}><span>Ooops...</span>
                <br/> page not found
            </div>
            <a  href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" ></a>

        </div>
    )
}

export default Error404
