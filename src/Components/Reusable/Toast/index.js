import React, { useEffect, useRef } from 'react';
import '../reusable.scss'
import {EToastsTypes} from "./types";
function Index({ children, remove, status }) {
    const removeRef = useRef();
    removeRef.current = remove;

    useEffect(() => {
        const duration = 15000;
        const id = setTimeout(() => removeRef.current(), duration);

        return () => clearTimeout(id);
    }, []);

    const calculateToastBgc = () => {
        console.log(status)
        switch (status){
            case EToastsTypes.success:
                return '#99cc33'

            case EToastsTypes.warning:
                return '#ff9966'

            case EToastsTypes.error:
                return '#cc3300'

        }
    }

    return (
        <div className="toast" style={{backgroundColor:calculateToastBgc()}}>
            <div className="toast__text">
                { children }
            </div>
            <div>
                <button onClick={remove} className="toast__close-btn">x</button>
            </div>
        </div>
    );
}

export default Index;