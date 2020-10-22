import React, {useEffect, useState} from "react";
import ResponsiveContext from "./responsiveContext";

const ResponsiveProvider = React.memo((props) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    }, [])
    return (
        <ResponsiveContext.Provider value={width < 780}>
            { props.children }
        </ResponsiveContext.Provider>
    )
})
export default ResponsiveProvider