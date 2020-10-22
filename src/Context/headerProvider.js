import React, {useEffect, useState} from "react";
import {HeaderContext} from "../Components/Main/Layout/Mobile/mobileHeader";

const HeaderProvider = React.memo((props) => {

    return (
        <HeaderContext.Provider value={(e) => props.action(e)}>
            { props.children }
        </HeaderContext.Provider>
    )
})
export default HeaderProvider