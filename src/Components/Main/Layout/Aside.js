import React, {useState} from 'react';
import './style.scss'


function Aside(props) {
    const {map, action} = props;
    const activeStyle = {
        borderLeft:'2px solid #4A76A8'
    }
    const [activeIndex, setActiveIndex] = useState(0)
    const RenderValuesList = _ => Object.values(map).map( (el, index) => {
        return (
            <div className='flex-column aside-list' key={el} >
                <div className='list_item'
                     onClick={() => {
                         setActiveIndex(index)
                         action(Object.keys(map)[index])
                     }}
                >
                    <span  style={index === activeIndex ? activeStyle : {}} className='pl-10'>{el}</span>
                </div>
            </div>
        )
    })
    return (
        <div className='aside ml-30'>
            <RenderValuesList />
        </div>
    )
}

export default Aside;
