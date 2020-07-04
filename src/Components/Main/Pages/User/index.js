import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import { getUser } from "../../../../store/modules/user";
import Annotation from "../../Layout/Annotatiton";
import UserPets from "./pets";

function User(props) {
    const { match } = props;
    const { id } = match.params;
    const user = useSelector(s => s.user.data[id] || {});
    const {pets} = useSelector(s => s.user.data[id] || []);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!Object.keys(user).length) dispatch(getUser(id))
    }, [id]);
    return (
        <div className="User">
            <Annotation username={user.username}
                        avatar={user.avatar}
                        background={user.background}
                        id={user._id}
            />
            <UserPets pets={pets}/>
        </div>
    );
}

export default withRouter(User);
