import React, { useState } from 'react';
import Annotation from "../../Layout/Annotatiton";
import {useSelector} from "react-redux";

function Feed() {
    const user = useSelector( s => s.user.current) || {};
    return (
        <div className="Feed">
            <Annotation user={user}/>

        </div>
    );
}

export default Feed;
