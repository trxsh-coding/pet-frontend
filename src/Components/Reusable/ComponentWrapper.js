import React, {useContext} from 'react'
import './reusable.scss'
import plus from '../../Assets/svg/plus.svg'
import ResponsiveContext from "../../Context/responsiveContext";
const ComponentWrapper = ({children, styles, title, width='100%', withActionButton=false, action}) => {
    const wrapperStyle = {
        width:width + 'px',
        ...styles
    }

    const RenderActionButton = _ => {
        return withActionButton ? (
            <div className='circle-wrapper mr-15 pointer' onClick={() => action()}>
                <img src={plus} />
            </div>
        ) : null
    }

    const mobile = useContext(ResponsiveContext)
    return !mobile ? (
        <div className='component-wrapper' style={wrapperStyle}>

            <div className="wrapper-body">
                {children}
            </div>

        </div>
    ) : <div className='mobile-wrapper'>{children}</div>
};

export default ComponentWrapper;
