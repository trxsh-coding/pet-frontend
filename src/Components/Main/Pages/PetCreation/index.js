import React, {useEffect, useState} from 'react';
import Annotation from "../../Layout/Annotatiton";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../../../store/modules/user";
import {GET_BY_ID} from "../../../../store/types";
import CreationBody from "./layout/creationBody";
function PetCreation(props) {
    const loading = useSelector(s => s.user.loading);
    const current = useSelector(s => s.user.current );
    const user = useSelector(s => s.user.data[current] || {});
    const {pets} = useSelector(s => s.user.data[current] || []);
    const dispatch = useDispatch();
    useEffect(() => {
    }, []);
    return (
        <div>
            <Annotation username={user.username}
                        avatar={user.avatar}
                        background={user.background}
                        current={current}
                        id={user._id}
            />
            <CreationBody current={current}/>

        </div>
    )
}

export default PetCreation;
