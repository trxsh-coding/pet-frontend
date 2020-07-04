import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Annotation from "../../Layout/Annotatiton";
import {petActions} from "../../../../store/modules/pet";
import InfoAnnotation from "./annotation/infoAnnotation";
import ButtonSection from "./annotation/buttonSection";
import {GET_BY_ID} from "../../../../store/types";
import Spinner from "../../../Reusable/Spinner";
import PetFeed from "./Feed";
import history from "../../../../services/history";

function Pet(props) {
    const { match } = props;
    const { id } = match.params;
    const dispatch = useDispatch();
    const pet = useSelector(state => state.pet.data[id] || []);
    const current = useSelector(state => state.user.current);
    const loading = useSelector(state => state.pet.loading);
    const {name, background, avatar, type, gender, ages, followee, ownerId} = pet;
    const isOwner = current == ownerId
    const [editable, setEditable] = useState(false)
    useEffect(() => {
        dispatch(petActions[GET_BY_ID](id))
    }, [id]);
    if(loading) return <div className='transform-center'> <Spinner/> </div>
    console.log(followee)
    return (
        <div className="Pet">
            <Annotation
                id={id}
                username={name}
                avatar={avatar}
                background={background}
                model='pet'
                action={petActions}
                current={current}
            />
            <div className="pet-bottom-section flex mt-40 flex-between">
                <ButtonSection
                    id={id}
                    followee={followee}
                    current={isOwner}
                    editable={editable}
                    onEdit={(value) => setEditable(value)}
                />
                <InfoAnnotation
                    editable={editable}
                    type={type}
                    gender={gender}
                    ages={ages}
                    id={id}
                />
            </div>
            <PetFeed id={id} />

        </div>
    );
}

export default Pet;
