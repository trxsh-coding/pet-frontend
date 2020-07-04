import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getUser, userActions} from "../../../../store/modules/user";
import Annotation from "../../Layout/Annotatiton";
import UserPets from "./pets";
import {GET_BY_ID} from "../../../../store/types";

function User(props) {
    const { match } = props;
    const { id } = match.params;
    const user = useSelector(s => s.user.data[id] || {});
    const loading = useSelector(s => s.user.loading);
    const current = useSelector(s => s.user.current == id );
    const {pets} = useSelector(s => s.user.data[id] || []);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!Object.keys(user).length) dispatch(userActions[GET_BY_ID](id))
    }, [id]);
    return (
        <div className="User">
            <Annotation username={user.username}
                        avatar={user.avatar}
                        background={user.background}
                        current={current}
                        id={user._id}
            />
            <UserPets pets={pets} id={id} current={current} loading={loading}/>
        </div>
    );
}

export default withRouter(User);
