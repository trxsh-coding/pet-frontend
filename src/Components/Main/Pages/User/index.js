import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser, userActions} from "../../../../store/modules/user";
import Annotation from "../../Layout/Annotatiton";
import UserPets from "./pets";
import {GET_BY_ID} from "../../../../store/types";
import UserInfoSection from "./pets/infoSection";
import Spinner from "../../../Reusable/Spinner";

function User(props) {
    const { match } = props;
    const { id } = match.params;
    const user = useSelector(s => s.user.data[id] || {});
    const loading = useSelector(s => s.user.loading);
    const current = useSelector(s => s.user.current == id );
    const currentId = useSelector(s => s.user.current );

    const {pets} = useSelector(s => s.user.data[id] || []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions[GET_BY_ID](id))
    }, [id]);
    if(!Object.keys(user).length || loading) return <div className='transform-center'> <Spinner/> </div>
    return (
        <div className="User">
            <Annotation username={user.username}
                        avatar={user.avatar}
                        background={user.background}
                        current={current}
                        id={user._id}
                        disableUpload

            />
            <UserInfoSection
                current={current}
                currentId={currentId}
                pets={user.pets}
                phone={user.phone}
                city={user.city}
                online={user.online}
                lastSeen={user.lastSeen}
                about={user.about}
            />
        </div>
    );
}

export default User;
