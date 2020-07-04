import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getPet} from "../../../../store/modules/old/pet";
import PetAnnotation from "./annotation";

function User(props) {
    const { match } = props;
    const { id } = match.params;
    const dispatch = useDispatch();
    const pet = useSelector(state => state.pet.data[id] || []);
    console.log(pet)
    useEffect(() => {
        if(!Object.keys(pet).length)dispatch(getPet(id))
    }, [id]);
    return (
        <div className="Pet">
            <PetAnnotation username={pet.name} id={pet._id} background={pet.background} avatar={pet.avatar}/>
        </div>
    );
}

export default withRouter(User);
