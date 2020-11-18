import React from "react";
import './reusable.scss'
function ProgressReusable({width = 200, height, progress= 0}) {

    const progressStyle = {
        width:typeof width === 'number' ? width + 'px' : width,
        height:'30px'
    }

    return (
        <div style={progressStyle} className='progress-bar'>
            <div style={{width:progress + '%'}} className='progress-line'>
            </div>
            <span> Загрузка </span>

        </div>
    )
}

export default ProgressReusable