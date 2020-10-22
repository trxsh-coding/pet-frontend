import React, {useCallback, useContext, useEffect, useState} from 'react';
import './style.scss'
import dropdown from '../../../Assets/svg/dropdown.svg'
import ResponsiveContext from "../../../Context/responsiveContext";


function Aside(props) {
    const {map, action} = props;
    const activeStyle = {
        borderLeft:'2px solid #4A76A8'
    }
    const [activeIndex, setActiveIndex] = useState(0);

    const mobile = useContext(ResponsiveContext);
    const RenderValuesList = _ => Object.values(map).map( (el, index) => {
        return (
            <div className={`flex-column  `} key={el} >
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


    const RenderMobileList = _ => {
        const [visibleDropdown, setVisibleDropdown] = useState(false);
        useEffect(() => {
            setVisibleDropdown(false)
        }, [activeIndex])
        return (
            <>
                <div className='flex flex-align-center flex-between'
                     onClick={() => {
                         setVisibleDropdown(!visibleDropdown)

                     }}
                >
                    <span  className=' pr-10'>{Object.values(map)[activeIndex]}</span>
                    <img src={dropdown} alt="dropdown-icon"/>
                </div>
                <div className={visibleDropdown ? 'aside-list visible'  : 'aside-list '}>
                    <RenderValuesList />
                </div>
            </>
        )
    }

    const RenderList = _ => mobile ? <RenderMobileList /> : <RenderValuesList />

    return (
        <div className={mobile ? 'aside' : 'aside ml-30' }>
            <RenderList />
        </div>
    )
}

export default Aside;
