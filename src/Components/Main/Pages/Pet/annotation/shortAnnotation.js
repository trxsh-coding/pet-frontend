import React from 'react';
import { withRouter } from 'react-router-dom'
import ReusableImage from "../../../../Reusable/Image";
import '../styles.scss'

function PetShortAnnotation(props) {
    const {avatar, name, type, ages, id, history} = props;
    const onRouterPush = _ =>history.push(`/pet/${id}`)
    return (
        <div className="pet-short-annotation flex-align-center mr-10 pointer" onClick={() => onRouterPush()}>
            <ReusableImage size={80} rounded link={avatar} fromServer />
            <div className="pet-info-block flex-column ml-10">
                <span>{name}</span>
                <span>{type}, {ages} года</span>
            </div>
        </div>
    );
}

export default withRouter(PetShortAnnotation);
